import React, { Component } from 'react';
import { View, StatusBar, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';


import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Buttons';
import { LastConverted } from '../components/Text';
import { Header } from '../components/Header';

import { swapCurrency, changeCurrencyAmount } from '../actions/currencies';

class Home extends Component {

  handlePressBaseCurrency() {
    this.props.navigation.navigate('CurrencyList', {
      title: 'Base Currency',
      type: 'base'
    })
  };

  handlePressQuoteCurrency() {
    this.props.navigation.navigate('CurrencyList', {
      title: 'Quote Currency',
      type: 'quote'
    })
  };

  handleTextChange(amount) {
    this.props.dispatch(changeCurrencyAmount(amount))
  };

  handleSwapCurrency() {
    this.props.dispatch(swapCurrency())
  };

  handleOptionPress() {
    this.props.navigation.navigate('Options', { title: 'Options' })
  };

  render() {
    let quotePrice = (this.props.amount * this.props.conversionRate).toFixed(2);
    if (this.props.isFetching) {
      quotePrice = '...';
    }
    return (
      <Container backgroundColor={this.props.primaryColor}>
        <StatusBar translucent={false} barStyle="light-content" />
        <Header
          onPress={() => this.handleOptionPress()}
        />
        <KeyboardAvoidingView behavior="padding">
          <Logo tintColor={this.props.primaryColor} />
          <InputWithButton
            buttonText={this.props.baseCurrency}
            onPress={() => this.handlePressBaseCurrency()}
            defaultValue={this.props.amount.toString()}
            keyboardType="numeric"
            onChangeText={(amount) => this.handleTextChange(amount)}
            textColor={this.props.primaryColor}
          />
          <InputWithButton
            buttonText={this.props.quoteCurrency}
            onPress={() => this.handlePressQuoteCurrency()}
            editable={false}
            defaultValue={quotePrice}
            textColor={this.props.primaryColor}
          />
          <LastConverted
            base={this.props.baseCurrency}
            quote={this.props.quoteCurrency}
            date={this.props.lastConvertedDate}
            conversionRate={this.props.conversionRate}
          />
          <ClearButton
            text="Reverse Currencies"
            onPress={() => this.handleSwapCurrency()}
          />
        </KeyboardAvoidingView>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  const baseCurrency = state.currencies.baseCurrency
  const quoteCurrency = state.currencies.quoteCurrency
  const conversionSelector = state.currencies.conversions[baseCurrency] || {}
  const rates = conversionSelector.rates || {}

  return {
    baseCurrency: state.currencies.baseCurrency,
    quoteCurrency: state.currencies.quoteCurrency,
    amount: state.currencies.amount,
    conversionRate: rates[quoteCurrency] || 0,
    isFetching: conversionSelector.isFetching,
    lastConvertedDate: conversionSelector.date ? new Date(conversionSelector.date) : new Date(),
    primaryColor: state.theme.primaryColor,
  }
}

export default connect(mapStateToProps)(Home);