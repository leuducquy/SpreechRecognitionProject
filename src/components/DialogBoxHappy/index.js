import React, { PureComponent } from 'react'
import {
  View,
  TouchableWithoutFeedback,
  Animated,
  Modal,
  Image,
} from 'react-native'
import { images } from '../../boot/image'

import * as d from '../../comon/Transform'
import ButtonTextCommon from '../ButtonTextCommonBase'
import TextComponent from '../TextComponent'
import styles from './style'

export default class DialogBoxChecIn extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isShow: false,
      animation: new Animated.Value(0),
    }
    props.onRef(this)
    this.mounted = false
  }

  componentDidMount() {
    this.mounted = true
  }

  componentWillUnmount() {
    this.mounted = false
  }

  open = () => {
    this.setState({ isShow: true }, () => {
      Animated.timing(this.state.animation, {
        toValue: 1,
        duration: 200,
        useNativeDriver: false,
      }).start()
    })
  }

  close = () => {
    Animated.timing(this.state.animation, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false,
    }).start(() => {
      if (this.mounted)
        this.setState({ isShow: false }, () => {
          if (this.props.onRequestClose) {
            this.props.onRequestClose()
          }
        })
      // this.props.onClose();
    })
  }

  render() {
    const { width, children, onClose, styleContainer } = this.props
    const { animation, isShow } = this.state
    const animationStyle = {
      top: animation.interpolate({
        inputRange: [0, 1],
        outputRange: [800, 0],
      }),
    }
    const overlayAnimationStyle = {
      opacity: animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 0.5],
      }),
    }
    return isShow ? (
      <Modal
        onRequestClose={() => {
          if (this.props.onRequestClose) {
            this.props.onRequestClose()
          }
        }}
        transparent
      >
        <View style={styles.container}>
          <TouchableWithoutFeedback onPress={this.close}>
            <Animated.View
              style={[styles.overlayStyle, overlayAnimationStyle]}
            />
          </TouchableWithoutFeedback>
          <Animated.View
            style={[
              styles.dialogStyle,
              { width },
              animationStyle,
              styleContainer,
            ]}
          >
            <View style={styles.content}>
              <Image
                source={images.happyIcon}
                style={{
                  marginBottom: 10,
                }}
              />
              <TextComponent
                textStyle={styles.title}
                text={'Bạn đã đăng ký thành công'}
              />
              <Image
                source={images.gem}
                style={{
                  marginVertical: 20,
                }}
              />
              <TextComponent
                textStyle={styles.title}
                text={'Nhận được 1 GEM'}
              />
              <Image source={images.cloundIcon} style={{}} />
            </View>
            <View style={styles.overLay}>
              <ButtonTextCommon
              onPress={()=>{
                this.close()
              }}
               containerStyle={styles.button} text={'Đóng'} />
            </View>
          </Animated.View>
        </View>
      </Modal>
    ) : null
  }
}

DialogBoxChecIn.defaultProps = {
  width: d.windowSize.width * 0.9,
  children: null,
  onClose: () => {},
}
