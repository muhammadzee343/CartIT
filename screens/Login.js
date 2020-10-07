import React from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  StyleSheet,
  Button,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Dimensions,
} from 'react-native';

let windowSize = Dimensions.get('window');

class Login extends React.Component {
  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={{flexGrow: 1}}>
        <ImageBackground
          source={require('../images/bg.png')}
          style={styles.bgimagestyle}>
          <View style={styles.innerContainer}>
            <Image
              style={styles.imgstyle}
              source={require('../images/ic_cartit.png')}
            />
          </View>
          <View style={styles.btncontainer}>
            <TextInput
              style={styles.textinputstyle}
              placeholder="Phone Number"
              keyboardType="phone-pad"
            />
            <TextInput
              style={styles.textinputstyle}
              placeholder="Enter OTP Code"
              keyboardType="number-pad"
            />
          </View>
          <View style={styles.loginbtncontainer}>
            <TouchableOpacity
              style={styles.textcontainer}
              onPress={() => {
                this.props.navigation.navigate('HomeNav');
              }}>
              <Text style={styles.textstyle}>LOG IN</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  bgimagestyle: {
    height: '100%',
    width: '100%',
  },
  innerContainer: {
    alignItems: 'center',
    marginTop: 70,
  },
  imgstyle: {
    height: 100,
    width: 100,
  },
  btncontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 90,
  },
  textinputstyle: {
    borderColor: '#707070',
    borderWidth: 1,
    borderRadius: 25,
    width: windowSize.width - 70,
    backgroundColor: '#fff',
    textAlign: 'center',
    marginTop: 10,
  },
  loginbtncontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  textcontainer: {
    backgroundColor: '#00b53e',
    height: 50,
    width: '85%',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#00b53e',
    borderWidth: 1,
    borderRadius: 35,
  },
  textstyle: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Login;
