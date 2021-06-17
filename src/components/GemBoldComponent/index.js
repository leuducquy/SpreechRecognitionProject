import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { images } from '../../boot/image';
import TextComponent from '../TextComponent';

import styles from './style'
// create a component
export default class GemBoldComponent extends Component {
    render() {
        const { gemText = 6, boltText = 2 } = this.props
        return (
            <View style={[styles.container]}>
                <View style={styles.gemView}>
                    <Image
                        source={images.gem}
                        style={styles.image} />
                    <TextComponent
                    textStyle={styles.text}
                        text={gemText}
                    />
                </View>
                <View style={styles.gemView}>
                    <Image
                        source={images.bolt}
                        style={styles.image} />
                    <TextComponent
                         textStyle={styles.text}
                        text={boltText}
                    />
                </View>
            </View>
        );
    }
}
