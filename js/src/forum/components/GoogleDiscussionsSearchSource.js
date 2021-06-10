import LinkButton from 'flarum/components/LinkButton';
import app from 'flarum/app';

/**
 * The `DiscussionsSearchSource` finds and displays discussion search results in
 * the search dropdown.
 */
export default class DiscussionsSearchSource {
  search(query){
    query = query.toLowerCase();

    return [];
  }

  view(query){
    query = query.toLowerCase();

    return [
      <li className="Dropdown-header">{app.translator.trans('core.forum.search.discussions_heading')}</li>,
      <li>
        <LinkButton target="_blank" external icon="fas fa-search" href={'https://google.es/search?q=site%3Awww.citroenforos.com+'+encodeURIComponent(query)}>
          {app.translator.trans('core.forum.search.all_discussions_button', { query })}
        </LinkButton>
      </li>
    ];
  }
}
