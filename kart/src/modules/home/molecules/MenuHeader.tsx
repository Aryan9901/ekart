import {StyleSheet, Text, View} from 'react-native';
import React, {FC, useState} from 'react';
import Animated, {
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {SafeAreaView} from 'react-native-safe-area-context';
import {menuData} from '@utils/db';
import MenuItem from '../atoms/MenuItem';
import Icon from '@components/atom/Icon';
import {RFValue} from 'react-native-responsive-fontsize';
import {Colors} from '@utils/Constants';

const MenuHeader: FC<{scrollY: SharedValue<number>}> = ({scrollY}) => {
  const [focusedIndex, setFocusedIndex] = useState(0);
  const opacityFadingStyle = useAnimatedStyle(() => {
    const opacity = interpolate(scrollY.value, [0, 80], [1, 0]);
    return {
      opacity,
    };
  });
  return (
    <Animated.View style={styles.container}>
      <SafeAreaView />
      <View style={styles.flexRow}>
        {menuData.map((item, index) => {
          return (
            <MenuItem
              key={index}
              item={item}
              isFocused={focusedIndex === index}
              onSelect={() => setFocusedIndex(index)}
            />
          );
        })}
      </View>
      <View style={styles.addressContainer}>
        <Icon size={16} name="home" iconFamily="Ionicons" />
        <Text style={styles.homeText}>Home</Text>
        <Text style={styles.addressText} numberOfLines={1}>
          43 High Stack, Noida, San Andreas, C/21-2323 Lucknow
        </Text>
        <Icon size={16} name="chevron-forward-sharp" iconFamily="Ionicons" />
      </View>
    </Animated.View>
  );
};

export default MenuHeader;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  homeText: {
    marginHorizontal: 5,
    fontWeight: 'bold',
    color: Colors.text,
    fontSize: RFValue(11),
  },
  addressText: {
    flex: 1,
    fontSize: RFValue(9),
    color: Colors.text,
  },
});
