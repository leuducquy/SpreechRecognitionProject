import React, { Component } from 'react'
import { View, Image } from 'react-native'
import { images } from '../../boot/image'
import ImageComponent from '../ImageComponent'
import RowComponent from '../RowComponent'
import TextComponent from '../TextComponent'

import styles from './style'
// create a component
export default class BannerComponent extends Component {
  render() {
    const { gemText = 6, boltText = 2 } = this.props
    return <RowComponent style={[styles.container]}>
    <View style={styles.left}>
      <TextComponent
        textStyle={styles.text}
     
        text={'Hoàn thành thử thách'}
      />

       <ImageComponent 
       style={{
         width:160,
         height:30
       }}
       source ={images.rewardTextBaner}/>
      <RowComponent style={{
        alignItems:'center'
      }}>
      <ImageComponent 
    
         source ={images.info}
      />
      <TextComponent
       textStyle={styles.text}
      containerStyle={{marginLeft:10}}
       text={'Hướng dãn chơi'}/>
      </RowComponent>
      </View>
      
     <ImageComponent
     containerStyle={styles.right}
     style={styles.bigImage}
      source={images.bannerBigIcon}/>
    </RowComponent>
  }
}
