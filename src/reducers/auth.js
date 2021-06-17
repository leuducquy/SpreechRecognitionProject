import actionTypes from '../comon/actionTypes'
import AsyncStorage from '@react-native-async-storage/async-storage';
const initialState = {
  isLogin:false,
  token:''
}
const authReducer = function(state = initialState, action) {
  switch(action.type){
    case actionTypes.LOGIN_SUCCESS:
      console.tron.display({
      name: `LOGIN_SUCCESS reducer`,
       preview :``,
      value: {
      state: action
      }
      })
     
     if(action.payload.saveToken){
      AsyncStorage.setItem('token', action.payload.token, err => console.log(err));

     }
     
      return {
        ...state,
        isLogin: true,
        token: action.payload.saveLogin ? action.payload.token: '',
      
      }
      case actionTypes.LOG_OUT:
        console.tron.display({
        name: `LOGOUT_SUCCESS reducer`,
         preview :``,
        value: {
        state: action
        }
        })
        AsyncStorage.setItem('token', '', err => console.log(err));
       
        return {
          ...state,
          isLogin: false,
          token: ''
        }
    default: return state;
  }
}


export default authReducer;
