import types from '../comon/actionTypes'
const login = (data) => ({
    type: types.LOGIN_SUCCESS,
    payload: data
  });
  
  
  const loginSuccess = (data) =>  (dispatch) => {
        dispatch(login(data));
  }
const logout = (token) => ({
    type: types.LOG_OUT,
    payload: token
  });
 
  
  const logoutSuccess = () =>  (dispatch) => {
        dispatch(logout());
  }
export {loginSuccess,logoutSuccess}