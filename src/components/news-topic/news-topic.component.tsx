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

type NewsTopicProps = {
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  fetchNewsByCategory: () => void;
};
const topicList: TopicListProps[] = [
  {
    id: 1,
    title: 'General',
  },
  {
    id: 2,
    title: 'Entertainment',
  },
  {
    id: 3,
    title: 'Sports',
  },
  {
    id: 4,
    title: 'Business',
  },
  {
    id: 5,
    title: 'Health',
  },
  {
    id: 6,
    title: 'Science',
  },
  {
    id: 7,
    title: 'Technology',
  },
];

const NewsTopic: FC<NewsTopicProps> = ({
  category,
  setCategory,
  fetchNewsByCategory,
}) => {
  const width = Dimensions.get('window').width;

  const renderTopicList: ListRenderItem<TopicListProps> = ({item}) => (
    <TouchableOpacity
      onPress={() => {
        setCategory(item.title);
        fetchNewsByCategory();
      }}
      style={{
        backgroundColor:
          category.toLowerCase() === item.title.toLowerCase()
            ? '#FF5733'
            : 'white',
        ...styles.container,
      }}>
      <Text
        style={{
          ...styles.text,
          color:
            category.toLowerCase() === item.title.toLowerCase()
              ? 'white'
              : 'gray',
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
