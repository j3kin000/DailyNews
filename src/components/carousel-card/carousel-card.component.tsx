import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {styles} from './styles';
import data from './data';
export const SLIDER_WIDTH = Dimensions.get('window').width + 80;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);

const CarouselCard = () => {
  const isCarousel = React.useRef(null);
  const [index, setIndex] = React.useState(0);

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Carousel
        layout="tinder"
        layoutCardOffset={9}
        vertical={false}
        ref={isCarousel}
        data={data}
        renderItem={({item, index}) => {
          return (
            <View style={styles.container} key={index}>
              <Image source={{uri: item.imgUrl}} style={styles.image} />
            </View>
          );
        }}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        inactiveSlideShift={0}
        onSnapToItem={index => setIndex(index)}
        useScrollView={true}
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
    </View>
  );
};

export default CarouselCard;
