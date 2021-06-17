import { StyleSheet } from 'react-native'

import { Colors, Fonts } from '../../comon'

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.baseColor,
    padding: 10,
    height: 44,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: `center`,
    alignItems: `center`,
    borderRadius: 5,
  },
  text: {
    color: Colors.white,
    fontFamily: Fonts.semi,
  },
})
export default styles
