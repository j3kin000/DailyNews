export const NEWS_ACTION_TYPES = {
  FETCH_NEWS_BY_CATEGORY_START: 'FETCH_NEWS_BY_CATEGORY_START',
  FETCH_NEWS_BY_CATEGORY_SUCCESS: 'FETCH_NEWS_BY_CATEGORY_SUCCESS',
  FETCH_NEWS_BY_CATEGORY_FAILED: 'FETCH_NEWS_BY_CATEGORY_FAILED',

  FETCH_NEWS_BY_RECOMMENDATION_START: 'FETCH_NEWS_BY_RECOMMENDATION_START',
  FETCH_NEWS_BY_RECOMMENDATION_SUCCESS: 'FETCH_NEWS_BY_RECOMMENDATION_SUCCESS',
  FETCH_NEWS_BY_RECOMMENDATION_FAILED: 'FETCH_NEWS_BY_RECOMMENDATION_FAILED',

  FETCH_NEWS_BY_SEARCH_START: 'FETCH_NEWS_BY_SEARCH_START',
  FETCH_NEWS_BY_SEARCH_SUCCESS: 'FETCH_NEWS_BY_SEARCH_SUCCESS',
  FETCH_NEWS_BY_SEARCH_FAILED: 'FETCH_NEWS_BY_SEARCH_FAILED',
};

export type SourceTypeProps = {
  id: string;
  name: string;
};
export type NewsTypeProps = {
  source: SourceTypeProps;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string; // could be date type  2023-07-11T11:11:13Z
  content: string;
};
