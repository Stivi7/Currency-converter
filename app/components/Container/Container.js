import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import styles from './styles'

class Container extends Component {
  render() {
    const containerStyle = [styles.container]
    if (this.props.backgroundColor) {
      containerStyle.push({ backgroundColor: this.props.backgroundColor })
    }
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={containerStyle}>
          {this.props.children}
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

Container.propTypes = {
  children: PropTypes.any,
};

export default Container;