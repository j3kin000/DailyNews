import {AnyAction} from 'redux';
import {NEWS_ACTION_TYPES, NewsTypeProps} from './news.type';
import {act} from 'react-test-renderer';

export type NewsStateProps = {
  readonly isFirstTimeOpen: boolean;
  readonly isLoading: boolean;
  readonly error: Error | null;
  readonly categoryNews: NewsTypeProps[];
  readonly recommendationNews: NewsTypeProps[];
  readonly searchNews: NewsTypeProps[];
};
export const NEWS_INITIAL_STATE: NewsStateProps = {
  isFirstTimeOpen: true,
  isLoading: false,
  error: null,
  categoryNews: [],
  recommendationNews: [],
  searchNews: [],
};

export default (
  state = NEWS_INITIAL_STATE,
  action = {} as AnyAction,
): NewsStateProps => {
  switch (action.type) {
    case NEWS_ACTION_TYPES.FETCH_FIRST_TIME_OPEN_STATE_CHANGE:
      return {...state, isFirstTimeOpen: action.payload};

    case NEWS_ACTION_TYPES.FETCH_NEWS_BY_CATEGORY_START:
      return {...state, isLoading: true};
    case NEWS_ACTION_TYPES.FETCH_NEWS_BY_CATEGORY_SUCCESS:
      return {
        ...state,
        categoryNews: action.payload,
        isLoading: false,
        error: null,
      };
    case NEWS_ACTION_TYPES.FETCH_NEWS_BY_CATEGORY_FAILED:
      return {
        ...state,
        isLoading: false,
        // categoryNews: [],
        error: action.payload,
      };

    case NEWS_ACTION_TYPES.FETCH_NEWS_BY_RECOMMENDATION_START:
      return {...state, isLoading: true};
    case NEWS_ACTION_TYPES.FETCH_NEWS_BY_RECOMMENDATION_SUCCESS:
      return {
        ...state,
        recommendationNews: action.payload,
        isLoading: false,
        error: null,
      };
    case NEWS_ACTION_TYPES.FETCH_NEWS_BY_RECOMMENDATION_FAILED:
      return {
        ...state,
        isLoading: false,
        // recommendationNews: [],
        error: action.payload,
      };

    case NEWS_ACTION_TYPES.FETCH_NEWS_BY_SEARCH_START:
      return {...state, isLoading: true};
    case NEWS_ACTION_TYPES.FETCH_NEWS_BY_SEARCH_SUCCESS:
      return {
        ...state,
        searchNews: action.payload,
        isLoading: false,
        error: null,
      };
    case NEWS_ACTION_TYPES.FETCH_NEWS_BY_SEARCH_FAILED:
      return {
        ...state,
        isLoading: false,
        searchNews: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
