import { Dimensions, Platform } from 'react-native';
import { isIphoneX } from './device';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const iOSStatusBarHeight = isIphoneX() ? 44 : 18;
const statusBarHeight = Platform.OS === 'ios' ? iOSStatusBarHeight : 22;
const navBarHeight = Platform.OS === 'ios' ? 44 + statusBarHeight : 35 + statusBarHeight;
const windowSize = Dimensions.get('window');
const ratioH = windowSize.height / 667;
const ratioW = windowSize.width / 375;
const deviceWidth = Dimensions.get('window').width * ratioW;
const deviceHeight = Dimensions.get('window').height * ratioH;

export const isIOS =()=>{
    return Platform.OS ==="ios" ? true: false
  }
export {
  wp,
  hp,
  deviceHeight,deviceWidth,
  statusBarHeight, navBarHeight, windowSize, ratioH, ratioW
};
