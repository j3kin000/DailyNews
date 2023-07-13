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
import {useSelector} from 'react-redux';
import {
  selectNewsError,
  selectNewsRecommendation,
  selectNewsRecommendationIsLoading,
  selectNewsSearch,
  selectNewsSearchedIsLoading,
} from '../../store/news/news.selector';
import {NewsTypeProps} from '../../store/news/news.type';
import {ActivityIndicator} from 'react-native-paper';

type TopicListProps = {
  id: number;
  title: string;
};

const topicList: TopicListProps[] = [
  {
    id: 1,
    title: 'All',
  },
  {
    id: 2,
    title: 'Political',
  },
  {
    id: 3,
    title: 'Sport',
  },
  {
    id: 4,
    title: 'Technology',
  },
  {
    id: 5,
    title: 'Shopping',
  },
  {
    id: 6,
    title: 'Environment',
  },
];

type NewsListProps = {
  isSearch: string;
  newsList: NewsTypeProps[];
  isLoading: boolean;
  error: Error | null;
};
const NewsList: FC<NewsListProps> = ({
  isSearch,
  newsList,
  isLoading,
  error,
}) => {
  const width = Dimensions.get('window').width;
  console.log('newsList', newsList);
  const renderTopicList: ListRenderItem<NewsTypeProps> = ({item}) => (
    <View
      style={{
        flexDirection: 'row',
        margin: 20,
      }}>
      <View
        style={{borderWidth: 0.5, borderRadius: 10, width: 120, height: 120}}>
        <Image
          style={{width: 120, height: 120, borderRadius: 10}}
          source={{uri: item.urlToImage}}
        />
      </View>
      <View
        style={{
          marginHorizontal: 10,
          flex: 1,
          marginBottom: 10,
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text>{item?.source?.name}</Text>
          <Text>...</Text>
        </View>
        <View
          style={{
            marginTop: 10,
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>{item.title}</Text>
        </View>
      </View>
    </View>
  );
  return (
    <>
      {isLoading ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
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
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginHorizontal: 20,
                    }}>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        fontSize: 16,
                        paddingLeft: 5,
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
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 20,
                }}>
                <Text style={{fontSize: 14}}>
                  {error
                    ? ' Error Fetching Data. Please try again later. '
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
