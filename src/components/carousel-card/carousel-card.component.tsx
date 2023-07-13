import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useMemo} from 'react';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {styles} from './styles';
import {data} from './data';
import {useSelector} from 'react-redux';
import {
  selectNewsCategory,
  selectNewsCategoryIsLoading,
  selectNewsError,
} from '../../store/news/news.selector';
export const SLIDER_WIDTH = Dimensions.get('window').width + 80;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);

const CarouselCard = () => {
  const isCarousel = React.useRef(null);
  const [index, setIndex] = React.useState(0);
  const newsCategory = useSelector(selectNewsCategory);
  const isCategoryNewsLoading = useSelector(selectNewsCategoryIsLoading);
  const error = useSelector(selectNewsError);

  const newsData = useMemo(
    () => (newsCategory.length === 0 ? data : newsCategory),
    [newsCategory],
  );
  console.log('REnder CarouselCard', newsCategory);

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {isCategoryNewsLoading ? (
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
              style={styles.image}
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
                <View style={styles.container} key={index}>
                  <Image source={{uri: item.urlToImage}} style={styles.image} />
                  <View style={{position: 'absolute', bottom: 20}}>
                    <Text
                      style={{
                        color: 'white',
                        left: 10,
                        fontSize: 14,
                        fontWeight: '600',
                      }}>
                      {item?.source?.name}
                    </Text>
                    <Text
                      style={{
                        color: 'white',
                        left: 10,
                        fontSize: 16,
                        fontWeight: 'bold',
                      }}>
                      {item.title}
                    </Text>
                  </View>
                </View>
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
              width: 10,
              height: 10,
              borderRadius: 5,
              marginHorizontal: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.92)',
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
