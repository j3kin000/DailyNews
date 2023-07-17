import {
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  SafeAreaView,
} from 'react-native';
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import DeviceCountry from 'react-native-device-country';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Searchbar from '../../components/searchbar/searchbar.component';
import Header from '../../components/header/header.component';
import NewsTopic from '../../components/news-topic/news-topic.component';
import CarouselCard from '../../components/carousel-card/carousel-card.component';
import NewsList from '../../components/news-list/news-list.component';
import {useSelector} from 'react-redux';
import {
  selectNewsCategory,
  selectNewsError,
  selectNewsIsLoading,
  selectNewsRecommendation,
  selectNewsRecommendationIsLoading,
  selectNewsSearch,
  selectNewsSearchedIsLoading,
} from '../../store/news/news.selector';
import {
  fetchNewsByCategoryAsync,
  fetchNewsByRecommendationAsync,
  fetchNewsBySearchAsync,
  fetchNewsBySearchFailed,
  fetchNewsBySearchStart,
} from '../../store/news/news.action';
import {useAppDispatch} from '../../utils/reducer/reducerHooks.utils';
import {ActivityIndicator} from 'react-native-paper';
import {globalStyles} from '../../utils/globalStyles/globalStyles.utils';
const HomeScreen = () => {
  const dispatch = useAppDispatch();
  const [countryCode, setCountryCode] = useState('');
  const [searchText, setSearchText] = useState('');
  const [category, setCategory] = useState('business');
  const recommendationList = useSelector(selectNewsRecommendation);
  const searchedList = useSelector(selectNewsSearch);
  const error = useSelector(selectNewsError);

  const [isLoading, setIsLoading] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  useEffect(() => {
    const init = async () => {
      setIsLoading(true);
      const {code} = await DeviceCountry.getCountryCode();
      setCountryCode(code);
      // fetchNewsByRecommendation();
      // fetchNewsByCategory();

      setIsLoading(false);
    };
    init();
  }, []);

  useEffect(() => {
    if (!searchText) {
      setIsSearch(false);
      dispatch(fetchNewsBySearchFailed());
    }
  }, [searchText, isSearch]);

  const fetchNewsByRecommendation = useCallback(async () => {
    dispatch(fetchNewsByRecommendationAsync(countryCode));
  }, [countryCode, recommendationList]);

  const fetchNewsByCategory = useCallback(async () => {
    dispatch(fetchNewsByCategoryAsync(countryCode, category.toLowerCase()));
  }, [countryCode, category]);

  const onSearchSubmit = useCallback(async (): Promise<void> => {
    try {
      if (!isSearch) {
        setIsSearch(true);
        dispatch(fetchNewsBySearchAsync(searchText));
      } else {
        setSearchText('');
        setIsSearch(false);
      }
    } catch (error) {}
  }, [searchText, isSearch]);

  return (
    <SafeAreaView style={globalStyles.container}>
      {isLoading ? (
        <View style={globalStyles.loadingContainer}>
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      ) : (
        <>
          <Header LeftIcon={<View />} title="Daily News" RightIcon={<View />} />
          <TouchableWithoutFeedback onPress={() => console.log('clicked')}>
            <Searchbar
              isSearch={isSearch}
              text={searchText}
              setText={setSearchText}
              onSubmit={onSearchSubmit}
            />
          </TouchableWithoutFeedback>
          {!searchText ? (
            <>
              <NewsTopic
                category={category}
                setCategory={setCategory}
                fetchNewsByCategory={fetchNewsByCategory}
              />
              <CarouselCard />
              <NewsList
                isSearch={searchText}
                newsList={recommendationList}
                isLoading={isLoading}
                error={error}
              />
            </>
          ) : (
            <NewsList
              isSearch={searchText}
              newsList={searchedList}
              isLoading={isLoading}
              error={error}
            />
          )}
        </>
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;
