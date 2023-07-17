import {createSelector} from 'reselect';
import {RootState} from '../store';
import {NewsStateProps} from './news.reducer';

const selectNewsSelector = (state: RootState): NewsStateProps => state.news;

export const selectIsFirstTimeOpen = createSelector(
  [selectNewsSelector],
  news => news.isFirstTimeOpen,
);

export const selectNewsCategory = createSelector(
  [selectNewsSelector],
  news => news.categoryNews,
);

export const selectNewsRecommendation = createSelector(
  [selectNewsSelector],
  news => news.recommendationNews,
);
export const selectNewsSearch = createSelector(
  [selectNewsSelector],
  news => news.searchNews,
);

export const selectNewsIsLoading = createSelector(
  [selectNewsSelector],
  news => news.isLoading,
);

export const selectNewsError = createSelector(
  [selectNewsSelector],
  news => news.error,
);
