import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Login from './screens/Login'

import AuthLoadingScreen from './screens/AuthLoadingScreen'

import TabNavigator from './tab'
import { connect } from 'react-redux'

const Stack = createStackNavigator()

// create a component
class App extends Component {
  render() {
    const isLogin = this.props.isLogin
    return (
      <NavigationContainer>
        {isLogin ? (
          <TabNavigator />
        ) : (
          <Stack.Navigator
            // initialRouteName="AuthLoadingScreen"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="AuthLoadingScreen" component={AuthLoadingScreen} />
            <Stack.Screen name="Login" component={Login} />
          

          
          </Stack.Navigator>
        )}
      </NavigationContainer>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isLogin: state.auth.isLogin,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment()),
    dispatch,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
