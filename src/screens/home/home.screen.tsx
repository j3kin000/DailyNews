import {View, Text, TextInput} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getHeadlinesNews} from '../../api/urls';
import Searchbar from '../../components/searchbar/searchbar.component';
import Header from '../../components/header/header.component';
import NewsTopic from '../../components/news-topic/news-topic.component';
import CarouselCard from '../../components/carousel-card/carousel-card.component';
import NewsList from '../../components/news-list/news-list.component';

const HomeScreen = () => {
  const [searchText, setSearchText] = useState('');
  // useEffect(() => {
  //   const init = async () => {
  //     await getHeadlinesNews('ph');
  //   };
  //   init();
  // }, []);

  const onSearchSubmit = async (): Promise<void> => {};
  return (
    <View style={{flex: 1, backgroundColor: '#f8f8fa'}}>
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
      <NewsTopic />
      <CarouselCard />
      <NewsList />
    </View>
  );
};

export default HomeScreen;
