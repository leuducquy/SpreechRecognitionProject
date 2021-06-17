import React, { Component } from 'react';
import {
  View, TouchableWithoutFeedback, Text
} from 'react-native';
import PropTypes from 'prop-types';

import styles from './style';

import JDialogBoxCommon from '../JDialogBoxCommon'
import {Fonts ,Colors} from '../../comon'
import JButton from '../JButton'
import  I18n from '../../i18n'
export default class JDialogBoxGetPoint extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
  
    };
 
   
  }


  
  
  open=()=>{
    this.thanksPopup.open()
  }
  close=()=>{
    this.thanksPopup.close()

  }
 
  
  render() {
    const {
      onPressButton, containerStyle,onClose,point = '0'
    } = this.props;
   
    
    return (
      <JDialogBoxCommon
      containerStyle= {styles.container}
      onRef={com => {
        this.thanksPopup = com
      }}
      onClose={() => {
        if(onClose){
          onClose()
        }
      }}
    >
      <View
        style={{
          backgroundColor: '#fff',
          justifyContent: 'center',
          alignItems: 'center',
        
        }}
      >
        <Text
          style={{
            fontFamily: Fonts.poppinsSemi,
            fontSize: 19,
            color: Colors.theme,
            textAlign: 'center',
            marginBottom: 10
          }}
        >
          {`${point} ${I18n.t('thanksPoint')}`}
        </Text>
      </View>
      <JButton
        title={I18n.t('close')}
        onPress={() => {
          this.thanksPopup.close()
          if(onPressButton){
            onPressButton()
          }
        }}
        containerStyle={{ alignSelf: 'center', paddingHorizontal: 10, borderRadius : 5   }}
        titleStyles={{ fontSize: 14 }}
      />
    </JDialogBoxCommon>
    )
  }
}

