import { extend } from 'flarum/extend';
import app from 'flarum/app';
import PostStream from 'flarum/components/PostStream';

export default function() {
    // This is executed every time the Index page is mounted
    extend(PostStream.prototype, 'oninit', () => {
        if (app.previous.type == null) {
            // First navigation
        } else {
            googletag.cmd.push(function () {
                googletag.destroySlots();
            });
        }

        googletag.cmd.push(function () {
            let mapping = googletag
                .sizeMapping()
                .addSize([1100, 0], [[728, 90]]) // desktop-hd
                .addSize([992, 0], [[728, 90]]) // desktop
                .addSize([768, 0], [[320, 50]]) // tablet
                .addSize([0, 0], [[320, 50]]) // phone
                .build();

            googletag
                .defineSlot(
                    "/22370525907/foros.thread",
                    [
                        [320, 50], [728, 90]
                    ],
                    "div-gpt-ad-1619614279094-0"
                )
                .defineSizeMapping(mapping)
                .addService(googletag.pubads());
            
            googletag.pubads().enableSingleRequest();
            googletag.pubads().collapseEmptyDivs();

            googletag.enableServices();
        });
    });

    // This is the extend we'll use to add the ads to the DOM (caution: can be executed some times for a single click)
    extend(PostStream.prototype, 'view', function(items) {
        if (! app.session.user) {
            items.children.unshift(m('div.flarum-ads', m('div.ad#div-gpt-ad-1619614279094-0')));

            googletag.cmd.push(function () {
                googletag.display("div-gpt-ad-1619614279094-0");
            });
        }
    });
}
