import app from 'flarum/app';
import addAdUnderHeader from './addAdsToIndexPage';
import addAdsToDiscussionPage from './addAdsToDiscussionPage';

app.initializers.add('flarum-ads', app => {
    addAdUnderHeader();
    addAdsToDiscussionPage();
});
