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

const NewsTopic: FC = () => {
  const width = Dimensions.get('window').width;

  const renderTopicList: ListRenderItem<TopicListProps> = ({item}) => (
    <TouchableOpacity
      style={{
        backgroundColor: item.id === 1 ? '#FF5733' : 'white',
        margin: 5,
        marginTop: 20,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text
        style={{
          padding: 12,
          fontSize: 14,
          textAlign: 'center',
          color: item.id === 1 ? 'white' : 'gray',
        }}>
        {item.title}
      </Text>
    </TouchableOpacity>
  );
  return (
    <View>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{flexDirection: 'row'}}
        // numColumns={1} // set number of columns
        // columnWrapperStyle={{flex: 1, justifyContent: 'space-around'}}
        data={topicList}
        renderItem={renderTopicList}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default NewsTopic;
