import Carousel from 'react-native-snap-carousel';

import React, {useState} from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';

export const SLIDER_WIDTH = Dimensions.get('window').width + 80;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

export const MyCarousel = ({carouselRef}) => {
  _renderItem = ({item, index}) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
        <Image source={require('./doge.jpeg')} />
      </View>
    );
  };


  return (
    <Carousel
      ref={carouselRef}
      data={entries}
      renderItem={_renderItem}
      sliderWidth={SLIDER_WIDTH}
      itemWidth={ITEM_WIDTH}
      activeSlideAlignment={'center'}
      contentContainerCustomStyle={styles.carouselContainer}
    />
  );
};

const styles = StyleSheet.create({
  slide: {},
  title: {},
  carouselContainer: {marginLeft: -4},
});
