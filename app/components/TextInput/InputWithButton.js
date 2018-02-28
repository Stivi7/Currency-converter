import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight, TextInput } from 'react-native';
import color from 'color';

import styles from './styles';

class InputWithButton extends Component {
  render() {
    const { onPress, buttonText, editable = true } = this.props
    const underlayColor = color(styles.$buttonBackgroundColorBase).darken(styles.$buttonBackgroundColorModifier)

    const containerStyles = [styles.container]
    if (editable === false) {
      containerStyles.push(styles.containerDisabled)
    }
    const buttonTextStyle = [styles.buttonText]
    if (this.props.textColor) {
      buttonTextStyle.push({ color: this.props.textColor })
    }

    return (
      <View style={containerStyles}>
        <TouchableHighlight underlayColor={underlayColor} style={styles.buttonContainer} onPress={onPress}>
          <Text style={buttonTextStyle}>{buttonText}</Text>
        </TouchableHighlight>
        <View style={styles.border} />
        <TextInput style={styles.input} underlineColorAndroid="transparent" {...this.props} />
      </View>
    )
  }
}

InputWithButton.propTypes = {
  onPress: PropTypes.func,
  buttonText: PropTypes.string,
  editable: PropTypes.bool,
}

export default InputWithButton;