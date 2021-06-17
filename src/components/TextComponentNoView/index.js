import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';

import styles from './style'
// create a component
export default class TextComponentNoView extends Component {
    render() {
        const {text,textStyle,containerStyle,onPress,
            numberOfLines = 0,underline=false,children} = this.props
        return (<Text  numberOfLines={numberOfLines}
             onPress ={onPress && onPress} style ={[styles.text,{textDecorationLine : underline ? 'underline' : 'none'},textStyle]}>
             {text}
             {children? children:null}
            </Text>
         
        );
    }
}
