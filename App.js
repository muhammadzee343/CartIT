import React from 'react';
import {View, Text} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

class App extends React.Component {
  componentDidMount() {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    SplashScreen.hide();
  }

  render() {
    return (
      <View>
        <Text>Running</Text>
      </View>
    );
  }
}

export default App;
