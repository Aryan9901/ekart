import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Modal,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '@store/reduxHook';
import {loginOrSignup} from '../api/api';
import {setData} from '../api/slice';
import {navigate} from '@navigation/NavigationUtil';
import {clearCart} from '@modules/cart/api/slice';
import {modalStyles} from '@styles/modalStyles';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import Icon from '@components/atom/Icon';
import {Colors} from '@utils/Constants';

const LoginModal: FC<{visible: boolean; onClose: () => void}> = ({
  visible,
  onClose,
}) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.account.user) as any;
  const [number, setNumber] = useState<string>('');
  const [address, setAddress] = useState<string>('');

  const handleLogin = async () => {
    const data = await loginOrSignup(number, address);
    if (data) {
      dispatch(setData(data));
      onClose();
    } else {
      Alert.alert('There was an error');
    }
  };

  const logout = async () => {
    onClose();
    navigate('Home');
    setAddress('');
    setNumber('');
    dispatch(clearCart());
    dispatch(setData(null));
  };

  useEffect(() => {
    if (user?.phone) {
      setNumber(user?.phone);
      setAddress(user?.address);
    }
  }, [user]);

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss}>
        <View style={modalStyles.modalContainer}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={modalStyles.keyboardAvoidingView}>
            <ScrollView contentContainerStyle={modalStyles.scrollViewContent}>
              <View style={modalStyles.modalContent}>
                <TouchableOpacity
                  style={modalStyles.closeIcon}
                  onPress={() => onClose()}>
                  <Icon
                    size={20}
                    color="#fff"
                    name="close"
                    iconFamily="Ionicons"
                  />
                </TouchableOpacity>
                <Text style={modalStyles.title}>
                  Login in for the best experience
                </Text>
                <Text style={modalStyles.subTitle}>
                  Enter your phone number to proceed
                </Text>
                <TextInput
                  style={modalStyles.input}
                  placeholder="Enter your number"
                  value={number}
                  maxLength={10}
                  onChangeText={setNumber}
                  keyboardType="number-pad"
                  placeholderTextColor={'#ccc'}
                />
                <TextInput
                  style={modalStyles.textareainput}
                  placeholder="Enter your address here"
                  value={address}
                  onChangeText={setAddress}
                  textAlignVertical="top"
                  multiline
                  placeholderTextColor={'#ccc'}
                />

                <View style={modalStyles.buttonContainer}>
                  <TouchableOpacity
                    onPress={() => handleLogin()}
                    style={modalStyles.button}>
                    <Text style={modalStyles.buttonText}>
                      {!user ? 'Login' : 'Save'}
                    </Text>
                  </TouchableOpacity>

                  {user && (
                    <TouchableOpacity
                      style={[
                        modalStyles.button,
                        {
                          backgroundColor: 'transparent',
                          borderColor: Colors.active,
                          borderWidth: 1,
                        },
                      ]}
                      onPress={() => logout()}>
                      <Text
                        style={[
                          modalStyles.buttonText,
                          {color: Colors.active},
                        ]}>
                        Logout
                      </Text>
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default LoginModal;

const styles = StyleSheet.create({});
