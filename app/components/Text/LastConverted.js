import React, { Component } from 'react';
import { Text } from 'react-native';
import moment from 'moment';

import styles from './styles';

class LastConverted extends Component {
  render() {
    const { base, quote, conversionRate, date } = this.props
    return (
      <Text style={styles.smallText}>
        1 {base} = {conversionRate} {quote} as of {moment(date).format('MMMM D, YYYY')}
      </Text>
    )
  }
}

export default LastConverted;