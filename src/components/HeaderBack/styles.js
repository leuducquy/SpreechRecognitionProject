import { Platform, StyleSheet } from 'react-native';
import { isIphoneX } from '../../comon/device';
import * as d from '../../comon/Transform';
import { Colors, Fonts } from '../../comon';

const styles = StyleSheet.create({
  container: {

        width: d.windowSize.width,
        height: d.navBarHeight,
       flexDirection: `row`,
        alignItems: 'center',
      
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        borderColor: Colors.borderSecond,
        borderBottomWidth:0.5
   
  },
  headerComponent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    paddingTop:
      /* eslint-disable */
      Platform.OS === 'ios' ? (isIphoneX() ? d.statusBarHeight : 1.2 * d.statusBarHeight) : 0,
    /* eslint-enable */
    paddingRight: d.windowSize.width * 0.045
  },
  leftHeaderStyle: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 0
  },
  centerHeaderStyle: {
    position: 'absolute',
    width: d.windowSize.width,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: -1,
    paddingTop:
      /* eslint-disable */
      Platform.OS === 'ios' ? (isIphoneX() ? d.statusBarHeight : 1.2 * d.statusBarHeight) : 0
    /* eslint-enable */
  },
  centerHeaderTextStyle: {
    fontSize: 18 * d.ratioW,
    fontWeight: '400',
    color: '#FFF',
    // marginLeft: d.windowSize.width * 0.02,
    fontFamily: Fonts.regular
  },
  rightHeaderStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: '100%'
    // width: d.windowSize.width * 0.09,
  }
});

export default styles;
