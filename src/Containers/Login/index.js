/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/prop-types */
/* eslint-disable no-plusplus */
import React, { PureComponent } from 'react'
import Constants from "expo-constants";
import {
  View,
  Alert,
  Image, ImageBackground,
  TextInput,
  Text,
  TouchableOpacity

} from 'react-native'
import { connect } from 'react-redux'
import { getPoints, login } from '../../services/jpassport'
import styles from './style'
import { loginSuccess } from '../../actions'
import { CommonActions } from "@react-navigation/native";
import ButtonTextCommon from '../../components/ButtonTextCommon'
import TextComponent from '../../components/TextComponent'
import I18n from '../../i18n'
import Config from '../../../Config'
import { Colors, Fonts } from '../../comon'
import { images } from '../../boot/image'
import BaseScreen from '../BaseScreen'
import RowComponent from '../../components/RowComponent';
import CheckBox from 'react-native-check-box'

class Login extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      isChecked: false,
      showPass:false
    }
  }







  onChangeText = text => {
    this.setState({
      email: text
    })
  }

  onChangePassText = text => {
    this.setState({
      password: text
    })
  }




  componentDidMount() {


  }
  login = async () => {
    // let email = 'leuducquy@gmail.com'
    // let password = 'Pimpim123@'



    console.log('hello')
    try {
      console.tron.display({
      name: `aa`,
       preview :``,
      value: {
        email: this.state.email,
      password: this.state.password,
     
      }
      })
      
      const res = await login(this.state.email, this.state.password)

      if (res && res.data && res.data.data.token) {

        const objecLogin = Object.assign({saveLogin:this.state.isChecked},res.data.data)
        console.tron.display({
          name: `objecLoginlogin`,
          preview: ``,
          value: {
            state: objecLogin
          }
        })
        this.props.loginSuccess(objecLogin)


      } else {
        Alert.alert('User name or password is not corrects')
      }


    } catch (error) {
      Alert.alert('User name or password is not correct')
      console.tron.display({
        name: `res error login`,
        preview: ``,
        value: {
          state: error
        }
      })
    }
  }



  render() {
    const { email, password } = this.state

    return (
      <BaseScreen>
        <ImageBackground
          source={images.homeBackGround}
          style={{
            flex: 1,
            alignItems: 'center',
            paddingTop: 50
          }}>
          <Image
            style={styles.image}
            source={
              images.logoHome
            }
            style={styles.image}
          />
          <TextComponent
            textStyle={styles.signIn}
            containerStyle={{
              marginTop: 20,

            }}
            text={`Sign in`}
          />
          <TextComponent
            containerStyle={{
              marginTop: 20,
              marginBottom: 60
            }}
            text={`Please sign in to continue`}
          />
          <View>
            <TextInput
             autoCapitalize={'none'}
              value={this.state.email}
              onChangeText={(email) => this.setState({ email })}
              placeholder={'Email'}
              style={[styles.input, {
                marginBottom: 10
              }]}
              placeholderTextColor={'white'}
            />
            <Image
              style={styles.emailIcon}
              source={images.emailIcon}
            />
          </View>
          <View>
            <TextInput
          
              value={this.state.password}
              onChangeText={(password) => this.setState({ password })}
              placeholder={'Password'}
              secureTextEntry={!this.state.showPass}

              style={styles.input}
              placeholderTextColor={'white'}
            />
            <Image
              style={styles.emailIcon}
              source={images.passwordIcon}
            />
            <TouchableOpacity
              style={styles.eyeIcon}
            onPress={()=>{
       
              this.setState({
                showPass:!this.state.showPass
              })
            }}
            >
            <Image
           
              source={images.eyeIcon}
            />
            </TouchableOpacity>
          </View>
          <RowComponent
            isSpace={true}
            style={styles.remember}>
            <RowComponent>
              <CheckBox
                style={{ marginRight: 10 }}
                checkedCheckBoxColor={'white'}
                uncheckedCheckBoxColor={'white'}
                onClick={() => {
                  this.setState({
                    isChecked: !this.state.isChecked
                  })
                }}
                isChecked={this.state.isChecked}

              />
              <TextComponent
                textStyle={{
                  alignSelf: 'flex-end'
                }}
                text={`Remember me`}
              />
            </RowComponent>

            <TextComponent
              textStyle={{
                alignSelf: 'flex-end'
              }}
              text={`Forgot your password?`}
            />

          </RowComponent>
          <ButtonTextCommon
            onPress={() => {
              this.login()
            }}
            textStyle={styles.textButton}
            containerStyle={styles.button}
            text={'SIGN IN'}
          />
          <Text style={styles.footerText}>
            Don't have account yet?
      <Text style={styles.signup}>SIGN UP</Text>
          </Text>
        </ImageBackground>
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
export default connect(mapStateToProps, mapDispatchToProps)(Login)
