import { extend } from 'flarum/extend';
import IndexPage from 'flarum/components/IndexPage';

export default function () {
    // This is executed every time the Index page is mounted
    extend(IndexPage.prototype, 'oninit', () => {
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
                .addSize([768, 0], [[728, 90]]) // tablet
                .addSize([0, 0], [[320, 50]]) // phone
                .build();

            googletag
                .defineSlot(
                    "/22370525907/foros.header",
                    [
                        [320, 50], [728, 90]
                    ],
                    "div-gpt-ad-1619603804551-0"
                )
                .defineSizeMapping(mapping)
                .addService(googletag.pubads());
            
            googletag.pubads().enableSingleRequest();
            googletag.pubads().collapseEmptyDivs();

            googletag.enableServices();
        });

        if (app.previous.type == null) {
            // First navigation
        } else {
            googletag.cmd.push(function () {
                googletag.display("div-gpt-ad-1619603804551-0");
            }); 
        }
    });

    // This is the extend we'll use to add the ads to the DOM (caution: can be executed some times for a single click)
    extend(IndexPage.prototype, 'view', (items) => {
        if (! app.session.user) {
            items.children.splice(1, 0, m('div.flarum-ads', m('div.ad#div-gpt-ad-1619603804551-0')));

            googletag.cmd.push(function () {
                googletag.display("div-gpt-ad-1619603804551-0");
            }); 
        }
    });
}
