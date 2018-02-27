import React, { Component } from 'react';
import { View, Image } from 'react-native';

import styles from './styles';

class Icon extends Component {
  render() {
    const iconStyles = [styles.icon];
    if (this.props.visible) {
      iconStyles.push(styles.iconVisible)
    }
    if (this.props.iconBackground) {
      iconStyles.push({ backgroundColor: this.props.iconBackground })
    }
    return (
      <View style={iconStyles}>
        {this.props.checkmark ?
          <Image style={styles.checkIcon}
            resizeMode="contain"
            source={require('./images/check.png')} /> :
          null}
      </View>
    )
  }
}

export default Icon;