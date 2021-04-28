import app from 'flarum/app';
import addAdUnderHeader from './addAdsToIndexPage';
import addAdBetweenPosts from './addAdsToDiscussionPage';

app.initializers.add('flarum-ads', app => {
    addAdUnderHeader();
    addAdsToDiscussionPage();
});
