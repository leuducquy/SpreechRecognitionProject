import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Porfolio from '../screens/Porfolio'
import Markets from '../screens/Markets'
import Home from '../screens/Home'
import More from '../screens/More'
import Wallets from '../screens/Wallets'
import { Colors } from '../comon'

// ------------------------------------
// Constants
// ------------------------------------

const Stack = createStackNavigator()

const navigationProps = {
  headerTintColor: 'white',
  headerStyle: { backgroundColor: Colors.black },
  headerTitleStyle: { fontSize: 18 },
}

// ------------------------------------
// Navigators
// ------------------------------------

export const MarketNavigator = () => (
  <Stack.Navigator
    initialRouteName="Markets"
    headerMode="none"
    screenOptions={navigationProps}
  >
    <Stack.Screen name="Markets" component={Markets} />
  </Stack.Navigator>
)

export const WalletNavigator = () => (
  <Stack.Navigator
    initialRouteName="Wallets"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen name="Wallets" component={Wallets} />
  </Stack.Navigator>
)
export const PortFolioNavigator = () => (
  <Stack.Navigator
    initialRouteName="Porfolio"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen name="Porfolio" component={Porfolio} />
  </Stack.Navigator>
)
export const HomeNavigator = () => (
  <Stack.Navigator
    initialRouteName="Home"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen name="Home" component={Home} />
  </Stack.Navigator>
)
export const MoreNavigator = () => (
  <Stack.Navigator
    initialRouteName="More"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen name="More" component={More} />
  </Stack.Navigator>
)
