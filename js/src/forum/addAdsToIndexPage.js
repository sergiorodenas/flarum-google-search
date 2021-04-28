import { extend } from 'flarum/extend';
import IndexPage from 'flarum/components/IndexPage';

export default function () {
    // This is executed every time the Index page is mounted
    extend(IndexPage.prototype, 'oninit', () => {
        if (app.previous.type == null) {
            // First navigation
        } else {
            console.log('Anuncios destruidos');
            googletag.cmd.push(function () {
                googletag.destroySlots();
            });
        }

        googletag.cmd.push(function () {
            let mapping = googletag
                .sizeMapping()
                .addSize([1100, 0], [[468, 60]]) // desktop-hd
                .addSize([992, 0], [[468, 60]]) // desktop
                .addSize([768, 0], [[468, 60]]) // tablet
                .addSize([0, 0], [[468, 60]]) // phone
                .build();

            googletag
                .defineSlot(
                    "/22370525907/foros.header",
                    [
                        [468, 60],
                    ],
                    "div-gpt-ad-1619603804551-0"
                )
                .defineSizeMapping(mapping)
                .addService(googletag.pubads());

            googletag
                .defineSlot(
                    "/22370525907/foros.header",
                    [
                        [468, 60],
                    ],
                    "div-gpt-ad-1619612727420-0"
                )
                .defineSizeMapping(mapping)
                .addService(googletag.pubads());
            
            googletag.pubads().enableSingleRequest();
            googletag.pubads().collapseEmptyDivs();

            googletag.enableServices();
        });
    });

    // This is the extend we'll use to add the ads to the DOM (caution: can be executed some times for a single click)
    extend(IndexPage.prototype, 'view', (items) => {
        if (! app.session.user) {
            switch(app.screen()){
                // 2 ads
                case 'desktop-hd':
                case 'desktop':
                    items.children.splice(1, 0, m('div.flarum-ads', [
                        m('div.ad#div-gpt-ad-1619603804551-0'),
                        m('div.ad#div-gpt-ad-1619612727420-0')
                    ]));

                    googletag.cmd.push(function () {
                        googletag.display("div-gpt-ad-1619603804551-0");
                        googletag.display("div-gpt-ad-1619612727420-0");
                    });

                    break;

                // 1 ad
                case 'tablet':
                case 'phone':
                    items.children.splice(1, 0, m('div.flarum-ads', m('div.ad#div-gpt-ad-1619603804551-0')));

                    googletag.cmd.push(function () {
                        googletag.display("div-gpt-ad-1619603804551-0");
                    });

                    break;

                default:
                    console.log('Flarum app.screen() isnt working');
            }   
        }
    });
}
