import { StyleSheet } from 'react-native'

import { Colors, Fonts } from '../../comon'

const styles = StyleSheet.create({
  container: {
   
    height: 44,
    justifyContent: `space-between`,
    flexDirection: `row`,
    paddingHorizontal: 20,
  },
  image: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  gemView: {
    flexDirection: `row`,
    borderRadius: 20,
    paddingHorizontal: 10,
    alignItems: `center`,
    height: 30,
    backgroundColor: 'rgb(67,69,72)',
  },
  text: {
    color: Colors.white,
    fontFamily: Fonts.regular,
  },
})
export default styles
