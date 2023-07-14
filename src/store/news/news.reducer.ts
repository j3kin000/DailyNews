import {AnyAction} from 'redux';
import {NEWS_ACTION_TYPES, NewsTypeProps} from './news.type';
import {act} from 'react-test-renderer';

export type NewsStateProps = {
  readonly isFirstTimeOpen: boolean;
  readonly isLoading: boolean;
  readonly isCategoryNewsLoading: boolean;
  readonly isRecommendationNewsLoading: boolean;
  readonly isSearchNewsLoading: boolean;
  readonly error: Error | null;
  readonly categoryNews: NewsTypeProps[];
  readonly recommendationNews: NewsTypeProps[];
  readonly searchNews: NewsTypeProps[];
};
export const NEWS_INITIAL_STATE: NewsStateProps = {
  isFirstTimeOpen: true,
  isLoading: false,
  isCategoryNewsLoading: false,
  isRecommendationNewsLoading: false,
  isSearchNewsLoading: false,
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
      return {...state, isCategoryNewsLoading: true};
    case NEWS_ACTION_TYPES.FETCH_NEWS_BY_CATEGORY_SUCCESS:
      return {
        ...state,
        categoryNews: action.payload,
        isCategoryNewsLoading: false,
        error: null,
      };
    case NEWS_ACTION_TYPES.FETCH_NEWS_BY_CATEGORY_FAILED:
      return {
        ...state,
        isCategoryNewsLoading: false,
        // categoryNews: [],
        error: action.payload,
      };

    case NEWS_ACTION_TYPES.FETCH_NEWS_BY_RECOMMENDATION_START:
      return {...state, isRecommendationNewsLoading: true};
    case NEWS_ACTION_TYPES.FETCH_NEWS_BY_RECOMMENDATION_SUCCESS:
      return {
        ...state,
        recommendationNews: action.payload,
        isRecommendationNewsLoading: false,
        error: null,
      };
    case NEWS_ACTION_TYPES.FETCH_NEWS_BY_RECOMMENDATION_FAILED:
      return {
        ...state,
        isRecommendationNewsLoading: false,
        // recommendationNews: [],
        error: action.payload,
      };

    case NEWS_ACTION_TYPES.FETCH_NEWS_BY_SEARCH_START:
      return {...state, isSearchNewsLoading: true};
    case NEWS_ACTION_TYPES.FETCH_NEWS_BY_SEARCH_SUCCESS:
      return {
        ...state,
        searchNews: action.payload,
        isSearchNewsLoading: false,
        error: null,
      };
    case NEWS_ACTION_TYPES.FETCH_NEWS_BY_SEARCH_FAILED:
      return {
        ...state,
        isSearchNewsLoading: false,
        searchNews: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
