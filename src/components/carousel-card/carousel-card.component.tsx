import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useMemo} from 'react';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {styles} from './styles';
import {data} from './data';
import {useSelector} from 'react-redux';
import {
  selectNewsCategory,
  selectNewsError,
  selectNewsIsLoading,
} from '../../store/news/news.selector';
import {NavigationType} from '../news-list/news-list.component';
import {useNavigation} from '@react-navigation/native';
import {NewsTypeProps} from '../../store/news/news.type';
import {globalStyles} from '../../utils/globalStyles/globalStyles.utils';
export const SLIDER_WIDTH = Dimensions.get('window').width + 80;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);

const CarouselCard = () => {
  const navigation: NavigationType = useNavigation();
  const isCarousel = React.useRef(null);
  const [index, setIndex] = React.useState(0);
  const newsCategory = useSelector(selectNewsCategory);
  const isLoading = useSelector(selectNewsIsLoading);
  const error = useSelector(selectNewsError);

  const newsData = useMemo(
    () => (newsCategory.length === 0 ? data : newsCategory),
    [newsCategory],
  );
  const navigateToNewsDetailScreen = (item: NewsTypeProps) => {
    navigation.navigate('NewsDetailScreen', {newsItem: item});
  };
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {isLoading ? (
        <View style={{height: 300}}>
          <Text style={{}}>Category news loading ...</Text>
        </View>
      ) : error ? (
        <>
          <View
            style={{
              ...styles.container,
            }}>
            <Image
              source={{
                uri: 'https://www.codespeedy.com/wp-content/uploads/2019/03/Chrome-Broken-Image-Icon.png',
              }}
              style={globalStyles.image}
            />

            <Text
              style={{
                position: 'absolute',
                bottom: 20,
                justifyContent: 'center',
                alignSelf: 'center',
              }}>
              There is something wrong fetching category. PleaseTry again
              later...
            </Text>
          </View>
        </>
      ) : (
        <>
          <Carousel
            layout="tinder"
            layoutCardOffset={9}
            vertical={false}
            ref={isCarousel}
            data={newsData}
            renderItem={({item, index}) => {
              // console.log('ITEMS CATEGORY', item);
              return (
                <TouchableOpacity
                  onPress={() => navigateToNewsDetailScreen(item)}
                  style={styles.container}
                  key={index}>
                  <Image
                    source={{uri: item.urlToImage}}
                    style={globalStyles.image}
                  />
                  <View style={{...styles.textContainer}}>
                    <Text
                      style={{
                        ...styles.text,
                      }}>
                      {item?.source?.name}
                    </Text>
                    <Text
                      style={{
                        ...styles.title,
                      }}>
                      {item.title}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={ITEM_WIDTH}
            inactiveSlideShift={0}
            onSnapToItem={index => setIndex(index)}
            useScrollView={true}
            // autoplay={true}
            // loop={true}
          />
          <Pagination
            dotsLength={newsData.length}
            activeDotIndex={index}
            carouselRef={isCarousel}
            dotStyle={{
              ...styles.dot,
            }}
            containerStyle={{
              paddingVertical: 7,
            }}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
            tappableDots={true}
          />
        </>
      )}
    </View>
  );
};

export default CarouselCard;
