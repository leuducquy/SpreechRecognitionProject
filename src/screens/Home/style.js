
import { Colors,Fonts } from '../../comon';
import * as d from '../../comon/Transform'
const styles = {
  image:{
    width:60,
    height:60
  },
  input:{
    height:44,
    width:d.windowSize.width - 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth:0.5,
    borderColor: "#FFFFFF",
    borderRadius: 5,
    paddingLeft: 40
   
  },
  overLay:{

  },
  signIn:{
    fontFamily: Fonts.bold,
    fontSize:20
  },
  remember:{
    marginTop:20,
  justifyContent:`space-between`,
  width:d.windowSize.width -20,
  alignItems: `center`,
 
 
  },
  emailIcon:{
    position: `absolute`,
    top: 10,
   
    left: 10,
    
    
  },
  eyeIcon:{
    position: `absolute`,
    top: 15,
   
    right: 10,
    
    
  },
  button:{
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
   width: d.windowSize.width - 20,
  marginTop:100,
  marginBottom:20
  },
  textButton:{
    color:'rgba(80, 115, 242, 1.0)',
  },
  footerText:{
    color:Colors.white,
  
  },
  signup:{
    fontFamily: Fonts.bold,
   
  }
};
export default styles;
