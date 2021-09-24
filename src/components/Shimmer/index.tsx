import React, {useEffect} from 'react';
import {Animated} from 'react-native';

import {
  Container,
  ImageShimmer,
  ContainerShimmer,
  TitleShimmer,
} from './styles';

export function Shimmer() {
  const AnimatedValue = new Animated.Value(0);

  useEffect(() => {
    imageAnimated();

    return () => imageAnimated();
  }, []);

  const imageAnimated = () => {
    AnimatedValue.setValue(0);
    Animated.timing(AnimatedValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start(() => {
      setTimeout(() => {
        imageAnimated();
      }, 500);
    });
  };

  const translateX = AnimatedValue.interpolate({
    inputRange: [0, 0.1],
    outputRange: [-10, 100],
  });

  return (
    <>
      <Container>
        <ImageShimmer>
          <Animated.View
            style={{
              width: '60%',
              height: '100%',
              opacity: 0.2,
              backgroundColor: '#5c5c5c',
              transform: [{translateX: translateX}],
            }}></Animated.View>
        </ImageShimmer>
        <ContainerShimmer>
          <TitleShimmer width={100}>
            <Animated.View
              style={{
                width: '50%',
                height: '100%',
                opacity: 0.2,
                backgroundColor: '#5c5c5c',
                transform: [{translateX: translateX}],
              }}></Animated.View>
          </TitleShimmer>
          <TitleShimmer width={75}>
            <Animated.View
              style={{
                width: '40%',
                height: '100%',
                opacity: 0.2,
                backgroundColor: '#5c5c5c',
                transform: [{translateX: translateX}],
              }}></Animated.View>
          </TitleShimmer>
        </ContainerShimmer>
      </Container>
    </>
  );
}
