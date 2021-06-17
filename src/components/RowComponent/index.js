import React, { Component } from 'react'
import { View, Image } from 'react-native'
import { images } from '../../boot/image'
import TextComponent from '../TextComponent'

import styles from './style'
// create a component
export default class RowComponent extends Component {
  render() {
    const { style,isSpace = false} = this.props
    return <View style={[styles.container,style,{
      justifyContent:isSpace ? 'space-between' :'flex-start'
    }]}>
    {this.props.children}
    </View>
  }
}
