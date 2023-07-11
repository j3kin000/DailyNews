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

const NewsList: FC = () => {
  const width = Dimensions.get('window').width;

  const renderTopicList: ListRenderItem<TopicListProps> = ({item}) => (
    <View style={{flexDirection: 'row', margin: 5}}>
      <Image
        style={{width: 150, height: 150, borderRadius: 10}}
        source={{uri: 'https://picsum.photos/id/10/200/300'}}
      />
      <View
        style={{
          marginHorizontal: 20,
          flex: 1,
          marginBottom: 10,
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text>Political News</Text>
          <Text>...</Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
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
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
          marginBottom: 5,
        }}>
        <Text style={{fontWeight: 'bold', fontSize: 16, paddingLeft: 5}}>
          Recommendation
        </Text>
        <TouchableOpacity>
          <Text style={{color: 'blue', fontSize: 14}}> See all</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={topicList}
        renderItem={renderTopicList}
        keyExtractor={item => item.id.toString()}
      />
    </>
  );
};

export default NewsList;
