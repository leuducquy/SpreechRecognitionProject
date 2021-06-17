import React from 'react';

import { TouchableOpacity, Text } from 'react-native';


import styles from './styles';
// import { Fonts } from '../../constants';

const JButton = ({
  title, containerStyle, onPress, titleStyles, 
  adjustsFontSizeToFit = false,
  titleProps,disable = false,
  numberOfLines = 0
}) => (
  <TouchableOpacity disable={disable} style={[styles.container, containerStyle]} onPress={onPress}>
    <Text
    numberOfLines={numberOfLines}
     adjustsFontSizeToFit={adjustsFontSizeToFit} style={[styles.textStyle, titleStyles]} {...titleProps}>
      {title}
    </Text>
  </TouchableOpacity>
);



JButton.defaultProps = {
  containerStyle: {},
  onPress: () => {},
  titleStyles: {}
};

export default JButton;
