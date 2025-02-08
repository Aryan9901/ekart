import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {FONTS, screenWidth} from '@utils/Constants';
import {RFValue} from 'react-native-responsive-fontsize';
import Icon from '@components/atom/Icon';
import {navigate} from '@navigation/NavigationUtil';

const VerticalList: FC<{data: any}> = ({data}) => {
  return (
    <View style={styles.container}>
      <View style={[styles.absoluteView, {backgroundColor: data?.bgColor}]} />
      <Text style={styles.headingText}>{data?.title}</Text>
      <Pressable style={[styles.button, {backgroundColor: data?.btnColor}]}>
        <Text style={styles.buttonText}>Explore More</Text>
        <Icon
          size={16}
          name="arrow-forward-sharp"
          iconFamily="Ionicons"
          color="#fff"
        />
      </Pressable>
      <FlatList
        data={data?.data}
        numColumns={2}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => (
          <Pressable
            style={styles.itemContainer}
            key={index}
            onPress={() => navigate('Categories')}>
            <Image source={{uri: item.image_uri}} style={styles.image} />
            <Text style={styles.productText}>{item?.title}</Text>
            <Text style={styles.subTitle}>{item?.subTitle}</Text>
          </Pressable>
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};

export default VerticalList;

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    marginTop: 15,
  },
  absoluteView: {
    width: screenWidth,
    height: 100,
    position: 'absolute',
    top: 0,
    zIndex: -1,
  },
  headingText: {
    fontSize: RFValue(16),
    paddingHorizontal: 15,
    fontFamily: FONTS.heading,
    color: '#222',
  },
  button: {
    padding: 10,
    marginHorizontal: 15,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginVertical: 10,
    gap: 10,
  },
  buttonText: {
    fontWeight: '400',
    color: '#fff',
    fontSize: RFValue(12),
  },
  itemContainer: {
    width: '48%',
    margin: 5,
    height: 170,
    marginBottom: 50,
    alignSelf: 'flex-start',
  },
  image: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
  },
  contentContainer: {
    paddingBottom: 10,
  },
  productText: {
    fontSize: RFValue(10),
    color: '#222',
    fontFamily: FONTS.heading,
    marginTop: 4,
  },
  subTitle: {
    fontSize: RFValue(10),
    color: '#222',
    fontWeight: '400',
  },
});
