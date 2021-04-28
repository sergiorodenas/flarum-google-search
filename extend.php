<?php

namespace SergioRodenas\FlarumAds;

use Flarum\Extend;
use Flarum\Frontend\Document;

return [
    (new Extend\Frontend('forum'))
        ->css(__DIR__ . '/less/forum.less')
        ->js(__DIR__.'/js/dist/forum.js')
        ->content(function (Document $document) {
            $document->head[] = '
                <script async="async" src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script>
                <script>
                    var googletag = googletag || {};
                    googletag.cmd = googletag.cmd || [];
                </script>
            ';
        }),
];
