import React from 'react';
import {View, Text} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import OnboardingScreen from './screens/onboardingScreen';
import SecondScreen from './screens/second';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

class App extends React.Component {
  componentDidMount() {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    SplashScreen.hide();
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="onbord" component={OnboardingScreen} />
          <Stack.Screen name="second" component={SecondScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
