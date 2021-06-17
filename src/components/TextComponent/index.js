import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import styles from './style'
// create a component
export default class TextComponent extends Component {
  render() {
    const {
      text,
      textStyle,
      containerStyle,
      onPress,
      numberOfLines = 0,
      underline = false,
      children,
    } = this.props
    return (
      <View style={[styles.container, containerStyle]}>
        <Text
          numberOfLines={numberOfLines}
          onPress={onPress && onPress}
          style={[
            styles.text,
            { textDecorationLine: underline ? 'underline' : 'none' },
            textStyle,
          ]}
        >
          {text}
          {children ? children : null}
        </Text>
      </View>
    )
  }
}
TextComponent.propTypes = {
  text: PropTypes.any,
  containerStyle: PropTypes.object,
  textStyle: PropTypes.any,
  onPress: PropTypes.func,
  underline: PropTypes.bool,
  numberOfLines: PropTypes.number,
}
