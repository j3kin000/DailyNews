import {
  View,
  Text,
  Animated,
  Image,
  TouchableOpacity,
  Linking,
  ScrollView,
  Dimensions,
} from 'react-native';
import React, {FC} from 'react';
import Header from '../../components/header/header.component';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {NavigationType} from '../../components/news-list/news-list.component';
import {NewsTypeProps} from '../../store/news/news.type';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation';
import {RouteProp} from '@react-navigation/native';
export const Width = Dimensions.get('window').width;
export const height = Dimensions.get('window').height;

export type NewsDetailProp = {
  navigation: StackNavigationProp<RootStackParamList, 'NewsDetailScreen'>;
  route: RouteProp<RootStackParamList, 'NewsDetailScreen'>;
};
const NewsDetail: FC<NewsDetailProp> = ({navigation, route}) => {
  const {source, title, description, publishedAt, urlToImage, author, url} =
    route?.params?.newsItem;
  return (
    <View style={{flex: 1}}>
      <Header
        LeftIcon={
          <SimpleLineIcons
            onPress={() => navigation.goBack()}
            name={'arrow-left'}
            size={20}
            color="black"
          />
        }
        title={source?.name}
        RightIcon={
          <Entypo name={'dots-three-vertical'} size={20} color="black" />
        }
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          backgroundColor: '#f8f8fa',
          flex: 1,
          margin: 10,
        }}>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>{title}</Text>
        <Text style={{color: 'gray', marginVertical: 15}}>{publishedAt}</Text>
        <View
          style={{
            borderRadius: 10,
            height: height * 0.5,
            backgroundColor: 'white',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.29,
            shadowRadius: 0.65,
            elevation: 1,
          }}>
          <Image
            source={{uri: urlToImage}}
            style={{
              borderRadius: 10,
              backgroundColor: 'white',
              width: '100%',
              height: '100%',
            }}
          />
        </View>

        <Text style={{alignSelf: 'center', marginVertical: 15, color: 'gray'}}>
          {author}
        </Text>
        <Text style={{fontWeight: 'bold', fontSize: 20, marginBottom: 20}}>
          {source?.name}
        </Text>
        <Text style={{fontSize: 16}}>{description}</Text>
        <Text style={{fontSize: 16, marginVertical: 10}}>
          You can read more in: lorem
        </Text>
        <TouchableOpacity
          onPress={() => Linking.openURL(url)}
          style={{flex: 1}}>
          <Text
            style={{
              marginLeft: 5,
              color: 'skyblue',
              fontSize: 16,
            }}>
            {url}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default NewsDetail;
