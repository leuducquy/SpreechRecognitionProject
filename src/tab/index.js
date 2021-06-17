import React from 'react'
import { View,Image,Text
 } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import { Colors } from '../comon'

// stack navigators
import {
  MarketNavigator,
  HomeNavigator,
  PortFolioNavigator,
  WalletNavigator,
  MoreNavigator
} from '../Navigator'
import styles from './style'
import { images } from '../boot/image'

const Tab = createBottomTabNavigator()
// homeTabIcon: require('../../assets/images/HomeTabIcon.png'),
// marketTabIcon: require('../../assets/images/MarketsTabIcon.png'),
// walletsTabIcon: require('../../assets/images/WalletTabIcon.png'),
// portfolioTabIcon: require('../../assets/images/PortlioTabIcon.png'),
// MoreTabIcon: require('../../assets/images/MoreTabIcon.png'),
const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      // eslint-disable-next-line react/prop-types
      tabBarIcon: ({ focused }) => {
        switch (route.name) {
          case 'Home':
            return <Image   resizeMode={'contain'}
            source={focused?images.homeTabIcon:images.homeTabIcon}
            style={styles.image}/>
          case 'Markets':
            return <Image   resizeMode={'contain'}
            source={focused?images.marketTabIcon:images.marketTabIcon}
            style={styles.image}/>
          case 'Wallets':
            return <Image 
            resizeMode={'contain'}
            source={focused?images.walletsTabIcon:images.walletsTabIcon}
            style={styles.image}/>
          
           
          case 'Portfolio':
            return <Image 
            resizeMode={'contain'}
            source={focused?images.portfolioTabIcon:images.portfolioTabIcon}
            style={styles.image}/>
            case 'More':
            return <Image 
            resizeMode={'contain'}
            source={focused?images.moreTabIcon:images.moreTabIcon}
            style={styles.image}/>
          default:
            return <View />
        }
      },
      // tabBarLabel: ({ focused }) => {
      
      //   switch (route.name) {
      //     case 'Challenge':
      //       return focused ? (
      //         <Text>{'Thử Thách'}</Text>
      //       ) :  <Text>{'Thử Thách'}</Text>;
          
      //     case 'Task':
      //       return focused ? (
      //         <Text>{'Nhiệm vụ'}</Text>
      //       ) :  <Text>{'Nhiệm vụ'}</Text>;
        
      //     case 'Profile':
      //       return focused ? (
      //         <Text>{`Hồ sơ`}</Text>
      //       ) :  <Text>{`Hồ sơ`}</Text>;
          
        
      //     default:
      //       return null;
           
      //   }
      // }
    })}
    tabBarOptions={{
      activeTintColor: '#A9A9A9',
      //   inactiveTintColor: colors.gray,
      style: {
        backgroundColor: 'black',
        // borderTopColor: 'gray',
        // borderTopWidth: 1,
        // paddingBottom: 5,
        // paddingTop: 5,
      },
    }}
    initialRouteName="Markets"
    swipeEnabled={false}
  
  >
   <Tab.Screen name="Home" component={HomeNavigator} />
    <Tab.Screen name="Markets" component={MarketNavigator} />
    <Tab.Screen name="Wallets" component={WalletNavigator} />
    <Tab.Screen name="Portfolio" component={PortFolioNavigator} />
    <Tab.Screen name="More" component={MoreNavigator} />
  </Tab.Navigator>
)

export default TabNavigator
