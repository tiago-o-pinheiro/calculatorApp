import {StatusBar, View} from 'react-native';
import {CalculatorScreen} from '@screen/index';
import {theme} from '@config/index';

export const App = () => {
  return (
    <View style={theme.appContainer}>
      <StatusBar barStyle="dark-content" backgroundColor={'black'} />
      <CalculatorScreen />
    </View>
  );
};
