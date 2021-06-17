import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import styles from './style'
// create a component
export default class ButtonTextCommon extends Component {
  render() {
    const {
      text,
      textStyle,
      containerStyle,
      onPress,
      numberOfLines = 0,
      disabled = false,
      isFull = true,
    } = this.props
    return (
      <TouchableOpacity
        disabled={disabled}
        style={[styles.container, containerStyle]}
        onPress={() => onPress()}
      >
        <Text numberOfLines={numberOfLines} style={[styles.text, textStyle]}>
          {text}
        </Text>
      </TouchableOpacity>
    )
  }
}
