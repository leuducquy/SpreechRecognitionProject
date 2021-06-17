import React, { PureComponent } from 'react';
import {
  View, TouchableWithoutFeedback, Animated, Modal
} from 'react-native';

import * as d from '../../comon/Transform';
import styles from './style';

export default class DialogBox extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
      animation: new Animated.Value(0)
    };
    props.onRef(this);
    this.mounted = false;
  }

  componentDidMount() {
    this.mounted = true;
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  open = () => {
    this.setState({ isShow: true }, () => {
      Animated.timing(this.state.animation, {
        toValue: 1,
        duration: 200
      }).start();
    });
  };

  close = () => {
    Animated.timing(this.state.animation, {
      toValue: 0,
      duration: 200
    }).start(() => {
      if (this.mounted) this.setState({ isShow: false }, () => {
        if(this.props.onRequestClose){
          this.props.onRequestClose()
        }
      });
      // this.props.onClose();
    });
  };

  render() {
    const {
      width, children, onClose, styleContainer
    } = this.props;
    const { animation, isShow } = this.state;
    const animationStyle = {
      top: animation.interpolate({
        inputRange: [0, 1],
        outputRange: [800, 0]
      })
    };
    const overlayAnimationStyle = {
      opacity: animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 0.5]
      })
    };
    return isShow ? (

      <Modal
        onRequestClose={() => {
          if (this.props.onRequestClose) {
            this.props.onRequestClose()
          }
        }} transparent>
        <View style={styles.container}>
          <TouchableWithoutFeedback onPress={this.close}>
            <Animated.View style={[styles.overlayStyle, overlayAnimationStyle]} />
          </TouchableWithoutFeedback>
          <Animated.View style={[styles.dialogStyle, { width }, animationStyle, styleContainer]}>
            <View>{children}</View>
          </Animated.View>
        </View>
      </Modal>
    ) : null;
  }
}


DialogBox.defaultProps = {
  width: d.windowSize.width * 0.9,
  children: null,
  onClose: () => { }
};
