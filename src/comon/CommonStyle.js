import { StyleSheet, Platform } from 'react-native'
import Colors from './Colors'
import Fonts from './Fonts'
import * as d from '../comon/Transform'
import { isIphoneX } from './device'
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centerXY: {
    justifyContent: `center`,
    alignItems: `center`,
  },
  centerX: {
    justifyContent: `center`,
  },
  centerY: {
    alignItems: `center`,
  },
  centeMe: {
    alignSelf: `center`,
  },
  row: {
    flexDirection: `row`,
  },
  redeemButton: {
    height: 25,
    backgroundColor: Colors.theme,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',

    width: '45%',
  },
  redeemButtonBig: {
    height: 25,
    backgroundColor: Colors.theme,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveButton: {
    marginTop: 10,
    height: 25,
    backgroundColor: Colors.theme,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',

    width: '90%',
  },
  notSaveButton: {
    height: 25,
    backgroundColor: '#FFFFFF',
    borderRadius: 3,
    borderColor: Colors.theme,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',

    width: '45%',
  },
  notSaveButtonBig: {
    marginTop: 5,
    marginBottom: 5,
    minHeight: 25,
    backgroundColor: '#FFFFFF',
    borderRadius: 3,
    borderColor: Colors.theme,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
  },
  saveText: {
    color: '#fff',
    fontFamily: Fonts.medium,
    fontSize: 16,
    marginHorizontal: 10,
  },
  notSaveText: {
    color: Colors.theme,
    fontFamily: Fonts.medium,
    fontSize: 16,
    marginHorizontal: 10,
  },
  unlockText: {
    fontFamily: Fonts.regular,
    color: Colors.text,
    fontSize: 10,
    lineHeight: 16,
  },
  unLockContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginVertical: 8,
  },
  text: {
    fontSize: 16,
    fontFamily: Fonts.regular,
    color: Colors.text,
  },
  textName: {
    fontSize: 14,
    fontFamily: Fonts.regular,
    color: Colors.textNew,
  },
  underline: {
    textDecorationLine: 'underline',
  },
  colorWhite: {
    color: '#FFFFFF',
  },
  paddingTop: {
    /* eslint-disable */
    paddingTop:
      Platform.OS === 'ios'
        ? isIphoneX()
          ? d.statusBarHeight
          : 1.2 * d.statusBarHeight
        : 0,
  },
  space: {
    justifyContent: `space-between`,
  },
  viewDetail: {
    fontFamily: Fonts.regular,
    fontSize: 14,
    color: Colors.blue,
    textAlign: `center`,
  },
  imageLock: {
    width: 26 * d.ratioW,
    height: 26 * d.ratioW,
    borderRadius: 13 * d.ratioW,
    backgroundColor: 'rgb(234,234,234)',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginRight: 5,
  },
  text: {
    color: Colors.text,
    fontFamily: Fonts.regular,
  },
  bold: {
    fontFamily: Fonts.bold,
  },
  medium: {
    fontFamily: Fonts.medium,
  },
  normal: {
    fontFamily: Fonts.regular,
  },
  textWhite: {
    color: '#FFFFFF',
  },
  underline: {
    textDecorationLine: 'underline',
  },
  bottom10: {
    marginBottom: 10,
  },
  top20: {
    marginTop: 20,
  },
  exchangeButton: {
    height: 35,
  },
  couponeText: {
    fontSize: 12,
  },
  exchangeText: {
    fontSize: 16,
  },
  title: {
    fontSize: 16,
    fontFamily: Fonts.medium,
    color: Colors.baseBlack,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: Fonts.medium,
    color: Colors.baseBlack,
  },
  topNavbar: {
    marginTop:
      Platform.OS === 'ios'
        ? isIphoneX()
          ? d.statusBarHeight
          : 1.2 * d.statusBarHeight
        : 0,
  },
  shadow: {
    elevation: 5,
    shadowColor: 'rgba(0, 0, 0, 0.12)',
    shadowOffset: {
      width: 3,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 1,
    backgroundColor: '#fff',
  },
  centerText: {
    textAlign: `center`,
  },
  buttonBase: {
    backgroundColor: Colors.baseColor,
    borderRadius: 5,
  },
})
export default styles
