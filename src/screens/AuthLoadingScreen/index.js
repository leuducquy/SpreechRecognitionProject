import React,{Component} from 'react';
import {
  ActivityIndicator,

  StatusBar,

  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { connect } from 'react-redux'
 class AuthLoadingScreen extends Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('token');
    console.tron.display({
    name: `_bootstrapAsync`,
     preview :``,
    value: {
    state:userToken
    }
    })
    
    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ?  'Markets' : 'Login');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    i: state.blank.i,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
  
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthLoadingScreen)