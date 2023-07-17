import {
  FlatList,
  ListRenderItem,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {FC} from 'react';
import {styles} from './styles';
import {Image} from 'react-native';

import {NewsTypeProps} from '../../store/news/news.type';
import {ActivityIndicator} from 'react-native-paper';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation';
import {StackNavigationProp} from '@react-navigation/stack';
import {globalStyles} from '../../utils/globalStyles/globalStyles.utils';

type TopicListProps = {
  id: number;
  title: string;
};

type NewsListProps = {
  isSearch: string;
  newsList: NewsTypeProps[];
  isLoading: boolean;
  error: Error | null;
};
export type NavigationType = StackNavigationProp<RootStackParamList>;
const NewsList: FC<NewsListProps> = ({
  isSearch,
  newsList,
  isLoading,
  error,
}) => {
  const navigation: NavigationType = useNavigation();
  const navigateToNewsDetailScreen = (item: NewsTypeProps) => {
    navigation.navigate('NewsDetailScreen', {newsItem: item});
  };
  const renderTopicList: ListRenderItem<NewsTypeProps> = ({item}) => (
    <TouchableOpacity
      onPress={() => navigateToNewsDetailScreen(item)}
      style={styles.newsListContainer}>
      <View style={styles.imageContainer}>
        <Image
          style={globalStyles.image}
          defaultSource={{
            uri: 'https://www.codespeedy.com/wp-content/uploads/2019/03/Chrome-Broken-Image-Icon.png',
          }}
          source={{uri: item.urlToImage}}
        />
      </View>
      <View
        style={{
          ...styles.header,
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text>{item?.source?.name}</Text>
          <Text>...</Text>
        </View>
        <View style={{}}>
          <Text style={{...styles.title}}>{item.title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
  return (
    <>
      {isLoading ? (
        <View style={{...globalStyles.loadingContainer}}>
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      ) : (
        <>
          <FlatList
            data={newsList}
            renderItem={renderTopicList}
            keyExtractor={item => item.title.toString()}
            onRefresh={() => null}
            refreshing={isLoading}
            ListHeaderComponent={() => (
              <View>
                {!isSearch && (
                  <View
                    style={{
                      ...styles.recommendationContainer,
                    }}>
                    <Text
                      style={{
                        ...styles.recommendationText,
                      }}>
                      Recommendation
                    </Text>
                  </View>
                )}
              </View>
            )}
            ListEmptyComponent={() => (
              <View
                style={{
                  ...styles.emptyContainer,
                }}>
                <Text style={{...globalStyles.normalText}}>
                  {error
                    ? ' Error Fetching Data. Please try again later. '
                    : newsList.length === 0 && !error
                    ? 'Search any news you want'
                    : ''}
                </Text>
              </View>
            )}
          />
        </>
      )}
    </>
  );
};

export default NewsList;

// const topicList: TopicListProps[] = [
//   {
//     id: 1,
//     title: 'All',
//   },
//   {
//     id: 2,
//     title: 'Political',
//   },
//   {
//     id: 3,
//     title: 'Sport',
//   },
//   {
//     id: 4,
//     title: 'Technology',
//   },
//   {
//     id: 5,
//     title: 'Shopping',
//   },
//   {
//     id: 6,
//     title: 'Environment',
//   },
// ];
