import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {FC} from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import Icon from '@components/atom/Icon';
import {goBack, navigate} from '@navigation/NavigationUtil';

interface searchBarProps {
  cartLength: number;
}

const SearchBar: FC<searchBarProps> = ({cartLength}) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => goBack()}>
        <Icon
          size={24}
          name="arrow-left"
          iconFamily="MaterialCommunityIcons"
          color="#000"
        />
      </Pressable>
      <View style={styles.searchContainer}>
        <Icon size={20} name="search" iconFamily="MaterialIcons" color="#000" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search products"
          placeholderTextColor={'#666'}
        />
      </View>
      <Icon size={24} name="heart-outline" iconFamily="Ionicons" color="#000" />
      <Pressable onPress={() => navigate('Cart')}>
        <Icon size={24} name="cart-sharp" iconFamily="Ionicons" color="#000" />
        {cartLength > 0 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{cartLength}</Text>
          </View>
        )}
      </Pressable>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    gap: 5,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 10,
    width: '70%',
    marginHorizontal: 10,
  },
  searchIcon: {
    marginRight: 15,
  },
  searchInput: {
    flex: 1,
    height: 40,
    color: '#000',
  },
  cartContainer: {
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: -7,
    right: -8,
    backgroundColor: 'red',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: '#fff',
    fontSize: RFValue(10),
    fontWeight: 'bold',
  },
});
