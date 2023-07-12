import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
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
  console.log('REnder CarouselCard');

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
      ) : !error ? (
        <>
          <View
            style={{
              ...styles.container,
              marginBottom: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>
              There is something wrong fetching category Try again later
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
            data={data}
            renderItem={({item, index}) => {
              // console.log('ITEMS CATEGORY', item);
              return (
                <View style={styles.container} key={index}>
                  <Image source={{uri: item.urlToImage}} style={styles.image} />
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
            dotsLength={data.length}
            activeDotIndex={index}
            carouselRef={isCarousel}
            dotStyle={{
              width: 10,
              height: 10,
              borderRadius: 5,
              marginHorizontal: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.92)',
            }}
            containerStyle={{paddingVertical: 8}}
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
