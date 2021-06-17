import { StyleSheet } from 'react-native'
import * as d from '../../comon/Transform';
import { Colors, Fonts } from '../../comon';

 const styles = StyleSheet.create({
  container: {
   
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: d.windowSize.width * 0.67,
  },
  imageStyle: {
    width: d.windowSize.width * 0.67,
    height: d.windowSize.width * 0.38,
  },
  titleContainer: {
    // height: 50 * d.ratioH,
    width: '100%',
    backgroundColor: '#fff',
    justifyContent: 'space-evenly',
  },
  titleStyle: {
    color: Colors.theme,
    fontSize: 14 * d.ratioW,
    fontFamily: Fonts.regular,
    // width: d.windowSize.width * 0.67,
  },
  contentStyle: {
    fontSize: 12 * d.ratioW,
    fontFamily: Fonts.regular,
    flex: 1,
  },
  brandContainer: {
    position: 'absolute',
    top: d.windowSize.width * 0.23 + 12 * d.ratioH,
    right: d.windowSize.width * 0.037,
    shadowColor: 'rgb(151,151,151)',
    shadowOffset: { width: d.windowSize.width * 0.015, height: d.windowSize.height * 0.012 },
    shadowOpacity: 0.3,
    elevation: 7,
    zIndex: 1,
  },
  brandCustomContainer: {
    width: d.windowSize.width * 0.14,
    height: d.windowSize.width * 0.14,
    borderRadius: d.windowSize.width * 0.07,
  },
  brandStyle: {
    width: d.windowSize.width * 0.14,
    height: d.windowSize.width * 0.14,
    borderRadius: d.windowSize.width * 0.07,
  },
  hotDealContainer: {
    backgroundColor: Colors.theme,
    justifyContent: 'center',
    width: 80 * d.ratioW,
    bottom: 40 * d.ratioH,
  },
  hotDealStyle: {
    color: '#fff',
    marginHorizontal: 5,
    fontFamily: Fonts.regular,
  },
  textStyle: {
    fontSize: 12 * d.ratioW,
    fontFamily: Fonts.regular,
  },
  iconStyle: {
    marginHorizontal: 5 * d.ratioW,
  },
});

export default styles;
