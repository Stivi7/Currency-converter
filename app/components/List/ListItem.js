import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

import Icon from './Icon';
import styles from './styles';

class ListItem extends Component {
  render() {
    const { text, onPress, selected = false, checkmark = true, visible = true, customIcon, iconBackground } = this.props

    return (
      <TouchableHighlight onPress={onPress} underlayColor={styles.$underlayColor}>
        <View style={styles.row}>
          <Text style={styles.text}>{text}</Text>
          {selected ? <Icon checkmark={checkmark} visible={visible} iconBackground={iconBackground} /> : <Icon />}
          {customIcon}
        </View>
      </TouchableHighlight>
    )
  }
}

export default ListItem;