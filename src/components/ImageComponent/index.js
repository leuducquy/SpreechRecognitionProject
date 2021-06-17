import React, { Component } from 'react'
import { View, Image } from 'react-native'
import { images } from '../../boot/image'
import RowComponent from '../RowComponent'
import TextComponent from '../TextComponent'

import styles from './style'
// create a component
export default class ImageComponent extends Component {
  render() {
    const { source,containerStyle,style,resizeMode='contain' } = this.props
    return <View style={containerStyle}>
    <Image 
    style={style ?style : styles.image}
    resizeMode={resizeMode}
    source={source}/>
    </View>
  }
}
