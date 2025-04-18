import React, {useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import {useAppSelector} from '@store/reduxHook';
import {getOrderByUserId} from './api/api';
import {orderStyles} from '@styles/orderStyles';
import CustomSafeAreaView from '@components/atom/CustomSafeAreaView';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import LoginModal from './molecules/LoginModal';
import {formatDate} from '@utils/Constants';


const Account = () => {
  const route = useRoute();
  const item = route?.params as any;
  const user = useAppSelector(state => state.account.user) as any;
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [orders, setOrders] = useState<any[]>([]);

  const fetchOrder = async () => {
    const data = await getOrderByUserId(user?._id);
    if (data) {
      setOrders(data);
    }
  };
  const renderItem = () => {
    return (
      <View style={orderStyles.orderContainer}>
        <Image
          source={{uri: item?.product?.image_uri}}
          style={orderStyles.image}
        />
        <View style={orderStyles.orderDetails}>
          <Text
            style={
              orderStyles.itemName
            }>{`${item.quantity}x ${item?.product?.name}`}</Text>
          <Text style={orderStyles.price}>₹{item?.product?.price}</Text>
        </View>
      </View>
    );
  };

  useEffect(() => {
    if (user) {
      fetchOrder();
    } else {
      setOrders([]);
    }
  }, [user]);

  useEffect(() => {
    if (item?.isRefresh && user) {
      fetchOrder();
    }
  }, [item]);

  return (
    <>
      <CustomSafeAreaView>
        <View style={orderStyles.container}>
          <Text style={orderStyles.heading}>{user?.phone ?? 'Account'}</Text>
          <View style={orderStyles.flexRow}>
            <Text style={orderStyles.subHeading}>
              user?.address ?? "Log in to get exclusive offers"
            </Text>
            <TouchableOpacity
              style={orderStyles.btn}
              onPress={() => setIsVisible(true)}>
              <Text style={orderStyles.btnText}>
                {user ? 'Update' : 'Log in'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={orderStyles.listContainer}>
          <Text style={orderStyles.heading}>Your Orders</Text>
          <FlatList
            data={orders}
            keyExtractor={item => item?.id?.toString()}
            renderItem={({item}) => (
              <View style={orderStyles.order}>
                <FlatList
                  data={item?.items}
                  keyExtractor={item => item?.id?.toString()}
                  renderItem={renderItem}
                  scrollEnabled={false}
                />
                <Text style={orderStyles.address}>{item?.address}</Text>
                <Text style={orderStyles.deliveryDate}>
                  Delivery by: {formatDate(item?.deliveryDate)}
                </Text>
                <View style={orderStyles.statusContainer}>
                  <Text style={orderStyles.statusText}>{item?.status}</Text>
                </View>
              </View>
            )}
            ListEmptyComponent={
              <View>
                <Text style={orderStyles.emptyText}>
                  {!user
                    ? 'Login to place your orders'
                    : 'There are no new orders right now'}
                </Text>
              </View>
            }
          />
        </View>
      </CustomSafeAreaView>
      <LoginModal visible={isVisible} onClose={() => setIsVisible(false)} />
    </>
  );
};

export default Account;
