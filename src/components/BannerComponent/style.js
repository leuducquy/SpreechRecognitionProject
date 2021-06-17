import { StyleSheet } from 'react-native'

import { Colors, Fonts } from '../../comon'

const styles = StyleSheet.create({
  container: {
   margin:20,
   paddingVertical: 30,
    justifyContent: `space-between`,
    flexDirection: `row`,
    paddingHorizontal: 20,
   backgroundColor: `#395D7D`,
   borderRadius: 5,

  },
  left:{
   flex:0.5,
   justifyContent: `space-between`
  },
  right:{
    flex:0.5,
    alignItems: `flex-end`
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
    fontFamily: Fonts.bold,
  },
  boldText: {
    color: Colors.white,
    fontFamily: Fonts.bold,
  },
  bigImage:{
    width:130,
    height:100
  }
})
export default styles
