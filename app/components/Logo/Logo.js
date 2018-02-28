import React, { Component } from 'react'
import { View, Image, Text, ImageBackground, Keyboard } from 'react-native';
import styles from './styles'

class Logo extends Component {
  render() {
    const imageStyles = [styles.image]
    if (this.props.tintColor) {
      imageStyles.push({ tintColor: this.props.tintColor })
    }
    return (
      <View style={styles.container}>
        <ImageBackground
          resizeMode="contain"
          style={styles.containerImage}
          source={require('./images/background.png')}
        >
          <Image
            resizeMode="contain"
            style={imageStyles}
            source={require('./images/logo.png')}
          />
        </ImageBackground>
        <Text style={styles.text}>Currency Converter</Text>
      </View>
    )
  }
}

export default Logo;