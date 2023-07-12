import {View, Text, TextInput} from 'react-native';
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import DeviceCountry from 'react-native-device-country';

import Searchbar from '../../components/searchbar/searchbar.component';
import Header from '../../components/header/header.component';
import NewsTopic from '../../components/news-topic/news-topic.component';
import CarouselCard from '../../components/carousel-card/carousel-card.component';
import NewsList from '../../components/news-list/news-list.component';
import {useDispatch, useSelector} from 'react-redux';
import {
  selectNewsCategory,
  selectNewsError,
  selectNewsIsLoading,
  selectNewsRecommendation,
  selectNewsSearch,
} from '../../store/news/news.selector';
import {
  fetchNewsByCategoryAsync,
  fetchNewsByRecommendationAsync,
} from '../../store/news/news.action';
import {useAppDispatch} from '../../utils/reducer/reducerHooks.utils';
const HomeScreen = () => {
  const dispatch = useAppDispatch();
  const [countryCode, setCountryCode] = useState('');
  const [searchText, setSearchText] = useState('');
  const [category, setCategory] = useState('business');
  const [isLoading, setIsLoading] = useState(false);

  const isSearch = useMemo(() => {
    return searchText === '' ? true : false;
  }, [searchText]);

  useEffect(() => {
    const init = async () => {
      setIsLoading(true);
      const {code} = await DeviceCountry.getCountryCode();
      setCountryCode(code);
      // await fetchNewsByRecommendation();
      // await fetchNewsByCategory();
      setIsLoading(false);
    };
    init();
  }, []);

  const fetchNewsByRecommendation = useCallback(async () => {
    dispatch(fetchNewsByRecommendationAsync(countryCode));
  }, [countryCode]);
  const fetchNewsByCategory = useCallback(async () => {
    // dispatch(fetchNewsByCategoryAsync(countryCode, category.toLowerCase()));
  }, [countryCode, category]);

  const onSearchSubmit = useCallback(async (): Promise<void> => {
    try {
      if (!isSearch) {
        setSearchText('');
        return;
      }
    } catch (error) {}
  }, [searchText]);

  return (
    <View style={{flex: 1, backgroundColor: '#f8f8fa'}}>
      {isLoading ? (
        <Text>Loading</Text>
      ) : (
        <>
          <Header
            leftIconName="menu"
            title="Daily News"
            rightIconName="notifications-outline"
          />
          <Searchbar
            text={searchText}
            setText={setSearchText}
            onSubmit={onSearchSubmit}
          />
          {isSearch && (
            <>
              <NewsTopic
                category={category}
                setCategory={setCategory}
                fetchNewsByCategory={fetchNewsByCategory}
              />
              <CarouselCard />
            </>
          )}
          <NewsList isSearch={isSearch} />
        </>
      )}
    </View>
  );
};

export default HomeScreen;
