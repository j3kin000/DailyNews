import {
  View,
  Text,
  Animated,
  Image,
  TouchableOpacity,
  Linking,
  ScrollView,
  Dimensions,
  SafeAreaView,
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
import {globalStyles} from '../../utils/globalStyles/globalStyles.utils';
import {styles} from './styles';

export type NewsDetailProp = {
  navigation: StackNavigationProp<RootStackParamList, 'NewsDetailScreen'>;
  route: RouteProp<RootStackParamList, 'NewsDetailScreen'>;
};
const NewsDetailScreen: FC<NewsDetailProp> = ({navigation, route}) => {
  const {source, title, description, publishedAt, urlToImage, author, url} =
    route?.params?.newsItem;
  return (
    <SafeAreaView style={globalStyles.container}>
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
        RightIcon={<View />}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={globalStyles.scrollViewContainer}>
        <Text style={globalStyles.headerTitleTextBold}>{title}</Text>
        <Text style={{...styles.publishedAt}}>{publishedAt}</Text>
        <View style={styles.imageContainer}>
          <Image
            defaultSource={{
              uri: 'https://www.codespeedy.com/wp-content/uploads/2019/03/Chrome-Broken-Image-Icon.png',
            }}
            source={{uri: urlToImage}}
            resizeMethod="auto"
            style={globalStyles.image}
          />
        </View>

        <Text style={{...styles.author}}>{author}</Text>
        <Text style={{...styles.name}}>{source?.name}</Text>
        <Text style={{...globalStyles.normalText}}>{description}</Text>
        <Text style={{...globalStyles.normalText, marginVertical: 10}}>
          You can read more in:
        </Text>
        <TouchableOpacity
          onPress={() => Linking.openURL(url)}
          style={{...globalStyles.container}}>
          <Text
            style={{
              ...styles.url,
            }}>
            {url}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewsDetailScreen;
