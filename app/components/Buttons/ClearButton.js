import React, { Component } from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';

import styles from './styles';

class ClearButton extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
        <View style={styles.wrapper}>
          <Image resizeMode="contain" style={styles.icon} source={require('./images/icon.png')} />
          <Text style={styles.text}>{this.props.text}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default ClearButton;