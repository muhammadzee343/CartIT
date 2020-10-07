import React from 'react';
import {View, Text} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import OnboardingScreen from './screens/onboardingScreen';
import SignupOrLogin from './screens/SignupOrLogin';
import LoginScreen from './screens/Login';
import ProfileScreen from './screens/Profile';
import HomeScreen from './screens/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
const StackHome = createStackNavigator();

function HomeNavigator() {
  return (
    <StackHome.Navigator>
      <StackHome.Screen name="Home" component={HomeScreen} />
    </StackHome.Navigator>
  );
}

class App extends React.Component {
  componentDidMount() {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    SplashScreen.hide();
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="onbord" component={OnboardingScreen} />
          <Stack.Screen name="loginorsigup" component={SignupOrLogin} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="HomeNav" component={HomeNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
