import {AnyAction, Dispatch} from 'redux';
import {NEWS_ACTION_TYPES, NewsTypeProps} from './news.type';
import {createAction} from '../../utils/reducer/reducer.utils';
import {
  getNewsByCategory,
  getNewsByRecommendation,
  getNewsBySearch,
} from '../../api/urls';
// //with redux thunk

export const setIsFirstTimeOpenAsync =
  (isFirstTimeOpen: boolean) =>
  async (dispatch: Dispatch): Promise<void> => {
    try {
      dispatch(
        createAction(
          NEWS_ACTION_TYPES.FETCH_FIRST_TIME_OPEN_STATE_CHANGE,
          isFirstTimeOpen,
        ),
      );
    } catch (error) {
      console.log('Error', error);
    }
  };

export const fetchNewsByCategoryAsync =
  (countryCode: string, category: string) =>
  async (dispatch: Dispatch): Promise<void> => {
    dispatch(createAction(NEWS_ACTION_TYPES.FETCH_NEWS_BY_CATEGORY_START));
    try {
      const newsArray: NewsTypeProps[] = await getNewsByCategory(
        countryCode,
        category,
      );
      console.log('newsArray', newsArray);
      dispatch(
        createAction(
          NEWS_ACTION_TYPES.FETCH_NEWS_BY_CATEGORY_SUCCESS,
          newsArray,
        ),
      );
    } catch (error) {
      console.log('ERROR fetchNewsByCategoryAsync', error);
      dispatch(
        createAction(NEWS_ACTION_TYPES.FETCH_NEWS_BY_CATEGORY_FAILED, error),
      );
    }
  };
export const fetchNewsByRecommendationAsync =
  (countryCode: string) => async (dispatch: Dispatch) => {
    dispatch(
      createAction(NEWS_ACTION_TYPES.FETCH_NEWS_BY_RECOMMENDATION_START),
    );
    try {
      const newsArray: NewsTypeProps[] = await getNewsByRecommendation(
        countryCode,
      );
      dispatch(
        createAction(
          NEWS_ACTION_TYPES.FETCH_NEWS_BY_RECOMMENDATION_SUCCESS,
          newsArray,
        ),
      );
    } catch (error) {
      console.log('ERROR fetchNewsByRecommendationAsync', error);

      dispatch(
        createAction(
          NEWS_ACTION_TYPES.FETCH_NEWS_BY_RECOMMENDATION_FAILED,
          error,
        ),
      );
    }
  };

export const fetchNewsBySearchAsync =
  (search: string) => async (dispatch: Dispatch) => {
    dispatch(createAction(NEWS_ACTION_TYPES.FETCH_NEWS_BY_SEARCH_START));
    try {
      const newsArray: NewsTypeProps[] = await getNewsBySearch(search);
      dispatch(
        createAction(NEWS_ACTION_TYPES.FETCH_NEWS_BY_SEARCH_SUCCESS, newsArray),
      );
    } catch (error) {
      dispatch(
        createAction(NEWS_ACTION_TYPES.FETCH_NEWS_BY_SEARCH_FAILED, error),
      );
    }
  };

export const fetchNewsBySearchStart = () =>
  createAction(NEWS_ACTION_TYPES.FETCH_NEWS_BY_SEARCH_START);

export const fetchNewsBySearchFailed = () =>
  createAction(NEWS_ACTION_TYPES.FETCH_NEWS_BY_SEARCH_FAILED);
// export const fetchCategoriesStart = () =>
//   createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

// export const fetchCategoriesSuccess = (categoriesArray) =>
//   createAction(
//     CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
//     categoriesArray
//   );

// export const fetchCategoriesFailed = (error) =>
//   createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);

// export const fetchCategoriesAsync = () => async (dispatch) => {
//   dispatch(fetchCategoriesStart);
//   try {
//     const categoriesArray = await getCollectionAndDocuments();
//     dispatch(fetchCategoriesSuccess(categoriesArray));
//   } catch (error) {
//     dispatch(fetchCategoriesFailed(error));
//   }
// };
