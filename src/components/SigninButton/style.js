
 import { StyleSheet } from 'react-native';

 import { Colors,Fonts } from '../../comon';
 
 const styles = StyleSheet.create({
  image:{
    width:30,
    height:30,
    marginRight:20
  },
   container: {
   
   flexDirection:`row`,
    backgroundColor: '#4267b2',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
   
    alignItems: `center`,
    height:64
   },
   facebookText:{
    fontSize:30,
    color:Colors.white,
    fontFamily:Fonts.bold,
    alignSelf:'flex-start',
    marginRight:30,
   
   },
   text :{
       color: Colors.white,
       fontFamily: Fonts.bold,
       fontSize: 16
   },
   textDes :{
       color: Colors.white,
       fontFamily: Fonts.regular,
       fontSize: 12,
       marginTop:5
   }
 });
 export default styles;
 
