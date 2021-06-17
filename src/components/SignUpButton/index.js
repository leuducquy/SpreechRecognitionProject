import I18n from '../../i18n';
import React, { Component } from 'react';
import { View, Text, Image,TouchableOpacity} from 'react-native';

import styles from './style'
// create a component
export default class SignUpButton extends Component {
    render() {
        const {text,textStyle,containerStyle,onPress,
          source = null,
            numberOfLines = 0,disabled=false,textDesStyle,hideDes=false} = this.props
        return (
            <TouchableOpacity
            disabled={disabled}
            style={[styles.container,containerStyle]}
            onPress={() => onPress()}
          >
          {source ? <Image 
          style={styles.image}
          source={source}/> : <Text numberOfLines ={numberOfLines} style={[styles.facebookText,textStyle]}>{`f`}</Text>}
          <View>
          <Text numberOfLines ={numberOfLines} style={[styles.text,textStyle]}>{I18n.t('facebooregister')}</Text>
          {hideDes ? null:  <Text numberOfLines ={numberOfLines} style={[styles.textDes,textDesStyle]}>{I18n.t('acceptRule')}</Text>}
            </View>
          
          </TouchableOpacity>
        );
    }
}
