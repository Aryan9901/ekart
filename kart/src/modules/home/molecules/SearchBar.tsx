import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {Colors} from '@utils/Constants';
import Icon from '@components/atom/Icon';
import {searchItems} from '@utils/db';
import RollingContent from 'react-native-rolling-bar';

const SearchBar = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(curr => !curr);
  };

  return (
    <>
      <SafeAreaView />
      <View style={styles.container}>
        <Pressable onPress={toggleSwitch} style={styles.toggleContainer}>
          <Text style={styles.brandText}>Brand Mall</Text>
          <Image
            source={
              isOn
                ? require('@assets/icons/switch_on.png')
                : require('@assets/icons/switch_off.png')
            }
            style={styles.switchIcon}
          />
        </Pressable>
        <Pressable style={styles.searchContainer}>
          <Icon name="search" size={20} iconFamily="Ionicons" color="black" />
          <RollingContent
            interval={3000}
            defaultStyle={false}
            customStyle={styles.textContainer}>
            {searchItems.map((item, index) => {
              return (
                <Text key={index} style={styles.contentText}>
                  {item}
                </Text>
              );
            })}
          </RollingContent>
        </Pressable>
      </View>
    </>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  toggleContainer: {
    width: '16%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  brandText: {
    fontSize: RFValue(8),
    fontWeight: '700',
    color: Colors.text,
  },
  switchIcon: {
    width: '100%',
    height: 30,
    marginTop: 4,
    resizeMode: 'contain',
  },
  textContainer: {
    flex: 1,
    height: 40,
    color: 'black',
    marginLeft: 5,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    backgroundColor: '#fafafa',
    borderWidth: 2,
    borderColor: '#ccc',
    paddingHorizontal: 10,
  },
  contentText: {fontSize: RFValue(10), color: Colors.text},
});
