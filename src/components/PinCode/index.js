import React from 'react'
import { StyleSheet, Text, View, Keyboard } from 'react-native'
import SmoothPinCodeInput from './Pincode'
import styles from './style'
import * as d from '../../comon/Transform'
export default class PinCode extends React.Component {
  state = {
    code: '',
    password: '',
  }
  pinInput = React.createRef()

  componentWillReceiveProps(nextProps) {
    if (this.props.pinCode !== nextProps.pinCode) {
      this.pinInput.current.shake().then(() => this.setState({ code: '' }))
    }
  }
  _checkCode = (code) => {
    this.props.checkCode(code)
    Keyboard.dismiss()
  }

  render() {
    const { code, password } = this.state
    return (
      <View style={styles.container}>
        <SmoothPinCodeInput
          ref={this.pinInput}
          editable={this.props.editable}
          password
          mask="."
          value={code}
          cellSize={d.windowSize.width / 5}
          cellStyle={{
            backgroundColor: '#E5E4E5',
            height: 60 * d.ratioH,
          }}
          codeLength={5}
          onTextChange={(code) => this.setState({ code })}
          onFulfill={this._checkCode}
          onBackspace={() => console.log('No more back.')}
        />
      </View>
    )
  }
}
