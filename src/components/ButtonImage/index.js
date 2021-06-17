import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

import styles from './style'
// create a component
export default class ButtonImage extends Component {
  render() {
    const {
      text,
      textStyle,
      containerStyle,
      onPress,
      numberOfLines = 0,
      disabled = false,
      isFull = true,
      source
    } = this.props
    return (
      <TouchableOpacity
        disabled={disabled}
        style={[styles.container, containerStyle]}
        onPress={() => onPress()}
      >
       <Image
        source={source}/>
      </TouchableOpacity>
    )
  }
}
