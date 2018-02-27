import { StackNavigator } from 'react-navigation';
import { StatusBar } from 'react-native';

import Home from '../screens/Home';
import CurrencyList from '../screens/CurrencyList';
import Options from '../screens/Options';
import Themes from '../screens/Themes';

const HomeStack = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: () => null,
    }
  },
  Options: {
    screen: Options,
    navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.state.params.title
    })
  },
  Themes: {
    screen: Themes,
    navigationOptions: {
      headerTitle: "Themes"
    }
  }
}, {
    headerMode: 'screen'
  })


const CurrencyListStack = StackNavigator({
  CurrencyList: {
    screen: CurrencyList,
    navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.state.params.title
    })
  }
})

export default StackNavigator({
  Home: {
    screen: HomeStack
  },
  CurrencyList: {
    screen: CurrencyListStack,
  },
}, {
    mode: 'card',
    cardStyle: { paddingTop: StatusBar.currentHeight },
    headerMode: 'none'
  })