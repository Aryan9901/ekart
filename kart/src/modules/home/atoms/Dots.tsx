import {View, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';


const Dots = ({active, index}: {active: number; index: number}) => {
  const progress = useSharedValue(0);

  useEffect(() => {
    if (active === index) {
      progress.value = withRepeat(withTiming(1, {duration: 3000}), 1, false);
    } else {
      progress.value = 0;
    }
  }, [active]);

  const animatedStyle = useAnimatedStyle(() => ({
    width: `${progress.value * 100}%`,
  }));

  return (
    <View style={[styles.dotContainer, {width: active === index ? 35 : 20}]}>
      <Animated.View style={[styles.activeDot, animatedStyle]} />
    </View>
  );
};

const styles = StyleSheet.create({
  dotContainer: {
    height: 4,
    borderRadius: 50,
    backgroundColor: '#DFDFDF',
    overflow: 'hidden',
    marginHorizontal: 5,
  },
  activeDot: {
    height: '100%',
    backgroundColor: '#000',
    borderRadius: 50,
  },
});

export default Dots;
