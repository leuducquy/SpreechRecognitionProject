import { NavigationActions ,StackActions} from 'react-navigation';

let navigator;

function setTopLevelNavigator(navigatorRef) {
  navigator = navigatorRef;
}
function navigateReset(routeName) {
  navigator.dispatch(
    StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({
          routeName:routeName
        }),
      ],
    }),
  );
}
function sendAction(action) {
  navigator.dispatch(action)
   
 
}
function navigateResetWithParams(routeName,params) {
  

  navigator.dispatch(
    StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({
          routeName:routeName,
          params:params
        }),
      ],
    }),
  );
}
function navigate(routeName, params) {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
}

// add other navigation functions that you need and export them

export default {
  navigate,
  setTopLevelNavigator,
  navigateReset,
  navigateResetWithParams,
  sendAction
}