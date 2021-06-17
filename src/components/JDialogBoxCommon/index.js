import React, { Component } from 'react'
import { View, TouchableWithoutFeedback, Animated } from 'react-native'

import * as d from '../../comon/Transform'
import styles from './style'
import Modal from 'react-native-modalbox'
export default class JDialogBoxCommon extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isShow: false,
      animation: new Animated.Value(0),
    }
    props.onRef(this)
  }

  componentDidMount() {}

  componentWillUnmount() {}
  isOpen = () => {
    return this.refs.modal.isOpen
  }
  open = () => {
    this.refs.modal.open()
  }
  close = () => {
    this.refs.modal.close()
    this.onClose()
  }

  onClose = () => {
    if (this.props.onClose) {
      this.props.onClose()
    }
  }
  render() {
    const { width, children, onClose, containerStyle } = this.props
    const { animation, isShow } = this.state

    return (
      <Modal
        ref={'modal'}
        position={`center`}
        onOpened={this.props.onOpened}
        backButtonClose={true}
        visible={this.props.visible}
        style={[styles.container, containerStyle]}
        onClosed={() => this.onClose()}
        transparent
      >
        {children}
      </Modal>
    )
  }
}

JDialogBoxCommon.defaultProps = {
  width: d.windowSize.width * 0.9,
}
