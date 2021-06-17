
import { Colors,Fonts } from '../../comon';
import * as d from '../../comon/Transform'
const styles = {
  container:{
    flex:1,
    backgroundColor: Colors.baseBlack
  },
  text:{
    fontSize: 30,
    color:Colors.white,
  },
  textColor:{
    fontSize: 30,
    color:Colors.baseColor,
  },
  image:{
    width : 140,
    height: 140
  },
  footer:{
   width:'100%',
    height: 44,
    flexDirection: 'row'
  },
  buttonLogin:{
   backgroundColor: Colors.black,
    flex:0.5,
    height:44
  },
  buttonClick:{
    backgroundColor: Colors.baseColor,
     flex:0.5,
     height:44
   },
  privacy:{ fontFamily: Fonts.regular, marginBottom: 20,marginTop:40 },
  closeText:{
    fontFamily: Fonts.poppinsSemi,
    fontSize:18,
    color:Colors.white,
    marginRight: 10,
    marginLeft:10
  },
  close:{
    backgroundColor: Colors.theme,
    padding:5,
    paddingHorizontal :30,
    borderWidth :1,
    borderColor: Colors.borderSecond,
    marginTop: 20,
    alignSelf:'center',
    borderRadius: 5,
    height:40
  },
  buttonDisabled:{
    backgroundColor: Colors.borderSecond,
    padding:5,
    paddingHorizontal :30,
    borderWidth :1,
    borderColor: Colors.borderSecond,
    marginTop: 20,
    alignSelf:'center',
    borderRadius: 5,
    height:40
  },
    placeholderColor:{
        color:Colors.borderSecond
    },
    phoneNumberInput: {
    backgroundColor: '#fff',
  
    height: 50,
    width: d.windowSize.width - 100,
  
    borderColor: Colors.borderSecond,
    borderBottomWidth:0.5

  },
};
export default styles;
