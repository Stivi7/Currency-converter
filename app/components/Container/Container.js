import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import styles from './styles'

class Container extends Component {
  render() {
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
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