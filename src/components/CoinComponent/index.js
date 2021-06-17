import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import TextComponent from '../TextComponent'
impoer
import styles from './style'
// create a component
export default class CoinComponent extends Component {
  render() {
    const {
      text,
      textStyle,
      containerStyle,
      onPress,
      numberOfLines = 0,
      disabled = false,
      isFull = true,
      name,
    } = this.props
    return (
      <TouchableOpacity
        disabled={disabled}
        style={[styles.container, containerStyle]}
        onPress={() => onPress()}
      >
     <View>
       <TextComponent
         text={name}
       />
     </View>
     <View>
       <TextComponent
         text={name}
       />
     </View>
      </TouchableOpacity>
    )
  }
}
