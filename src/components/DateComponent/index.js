import React, { Component } from 'react'
import { View, Image } from 'react-native'
import { images } from '../../boot/image'
import ImageComponent from '../ImageComponent'
import RowComponent from '../RowComponent'
import TextComponent from '../TextComponent'

import styles from './style'
const DateMap = [
  'T5',
  'T6',
  'Hôm nay',
 'CN',
  'T2',
]
export default class DateComponent extends Component {
  render() {
    const { gemText = 6, boltText = 2 } = this.props
    return <RowComponent style={[styles.container]}>
    {DateMap.map((item,index)=>{
      return index !== 2 ? <View style={styles.normal}>
      <TextComponent text={item}/>
      </View> :  <View style={styles.center}>
      <Image 
        source={images.checkIcon}
      />
      <TextComponent
        text={item}
      />
</View>
    })}
    </RowComponent>
  }
}
