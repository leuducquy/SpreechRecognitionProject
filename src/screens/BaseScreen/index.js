/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/prop-types */
/* eslint-disable no-plusplus */
import React, { PureComponent } from 'react'
import Constants from "expo-constants";
import {
  View,
  Alert,
Image,Text,
SafeAreaView

} from 'react-native'
import { connect } from 'react-redux'
import { getPoints, login } from '../../services/jpassport'
import styles from './style'
import {loginSuccess} from '../../actions'
import { CommonActions } from "@react-navigation/native";
import ButtonTextCommon from '../../components/ButtonTextCommon'
import TextComponent from '../../components/TextComponent'
import I18n from '../../i18n'
import Config from '../../../Config'
import { Colors, Fonts } from '../../comon'
import {images} from '../../boot/image'
class BaseScreen extends PureComponent {
  constructor (props) {
    super(props)
   
    this.state = {
      userName:'',
      password:''
    }
  }

 

 

 

 



  render () {
   const {containerStyle} = this.props
  
    return (
      <SafeAreaView
        style={[styles.container,containerStyle]}>
     {this.props.children}
      </SafeAreaView>
    )
  }
}
const mapStateToProps = state => ({
  site: state.site,
  auth: state.auth
})
const mapDispatchToProps = dispatch => ({
  loginSuccess: data => dispatch(loginSuccess(data)),
  dispatch
})
export default connect(mapStateToProps, mapDispatchToProps)(BaseScreen)
