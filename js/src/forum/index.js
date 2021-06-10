import { extend } from 'flarum/extend';
import app from 'flarum/app';
import Search from "flarum/components/Search";
import GoogleDiscussionsSearchSource from './components/GoogleDiscussionsSearchSource';

app.initializers.add('flarum-google-search', app => {
    extend(Search.prototype, "sourceItems", function(items) {
      items.remove('discussions');
      items.add('google', new GoogleDiscussionsSearchSource());
    });
});
