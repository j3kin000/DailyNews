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
} from '../../store/news/news.selector';
import {NewsTypeProps} from '../../store/news/news.type';

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
  isSearch: boolean;
};
const NewsList: FC<NewsListProps> = ({isSearch}) => {
  const width = Dimensions.get('window').width;
  const newsRecommendation = useSelector(selectNewsRecommendation);
  const newsSearched = useSelector(selectNewsSearch);

  const error = useSelector(selectNewsError);

  const isNewsRecommendationLoading = useSelector(
    selectNewsRecommendationIsLoading,
  );
  const renderTopicList: ListRenderItem<NewsTypeProps> = ({item}) => (
    <View
      style={{
        flexDirection: 'row',
        margin: 20,
      }}>
      <Image
        style={{width: 120, height: 120, borderRadius: 10}}
        source={{uri: 'https://picsum.photos/id/10/200/300'}}
      />
      <View
        style={{
          marginHorizontal: 10,
          flex: 1,
          marginBottom: 10,
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text>Political News</Text>
          <Text>...</Text>
        </View>
        <View
          style={{
            marginTop: 10,
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>
            Eployees at a company in America started a work asdasdasd
          </Text>
        </View>
      </View>
    </View>
  );
  return (
    <>
      {isSearch && (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 20,
            marginVertical: 10,
            marginBottom: 10,
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 16, paddingLeft: 5}}>
            Recommendation
          </Text>
          <TouchableOpacity>
            <Text style={{color: 'blue', fontSize: 14}}> See all</Text>
          </TouchableOpacity>
        </View>
      )}

      {isNewsRecommendationLoading ? (
        <Text>REcommendation news loading ... </Text>
      ) : !error ? (
        <Text>Error fetching News</Text>
      ) : (
        <>
          <FlatList
            data={topicList}
            renderItem={renderTopicList}
            keyExtractor={item => item.title.toString()}
          />
        </>
      )}
    </>
  );
};

export default NewsList;
