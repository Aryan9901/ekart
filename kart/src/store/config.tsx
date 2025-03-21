import {Platform} from 'react-native';

// for emulator or simulator device
export const BASE_URL =
  Platform.OS == 'android'
    ? 'http://10.0.2.2:3000'
    : 'http://192.168.29.254:3000';

// for physical device
//  use your ip or hosted url
// export const BASE_URL = 'http://192.168.29.88:3000'
