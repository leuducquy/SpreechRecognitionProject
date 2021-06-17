/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/prop-types */
/* eslint-disable no-plusplus */
import React, { PureComponent } from 'react'
import Constants from "expo-constants";
import {
  View,
  Alert,
Image,ImageBackground,
TextInput,
Text

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
import BaseScreen from '../BaseScreen'
import RowComponent from '../../components/RowComponent';
import CheckBox from 'react-native-check-box'
class Home extends PureComponent {
  constructor (props) {
    super(props)
   
    this.state = {
      userName:'',
      password:''
    }
  }

 

 

 

  

  

  
 


  render () {
  
 
    return (
      <BaseScreen>
     
      </BaseScreen>
     
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
export default connect(mapStateToProps, mapDispatchToProps)(Home)
