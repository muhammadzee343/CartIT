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
} from 'react-native';

class Second extends React.Component {
  render() {
    return (
      <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
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
            <TouchableOpacity
              style={styles.textcontainertwo}
              onPress={() => {
                this.props.navigation.navigate('Profile');
              }}>
              <Text style={styles.textstyle}>Sign up with Phone Number</Text>
            </TouchableOpacity>
            <View style={styles.touchablestyle}>
              <Text style={styles.alreadystyle}>Already a user?</Text>
            </View>
            <TouchableOpacity
              style={styles.logincontainer}
              onPress={() => {
                this.props.navigation.navigate('Login');
              }}>
              <Text style={styles.logintextstyle}>LOG IN</Text>
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
    marginTop: 70,
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
    fontSize: 20,
    color: 'white',
  },
  textcontainertwo: {
    backgroundColor: '#00b53e',
    height: 50,
    width: '85%',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#00b53e',
    borderWidth: 1,
    borderRadius: 35,
    marginTop: 10,
  },
  touchablestyle: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    width: '90%',
  },
  alreadystyle: {
    color: '#707070',
    fontSize: 20,
  },
  logincontainer: {
    backgroundColor: '#fff',
    height: 50,
    width: '85%',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#707070',
    borderWidth: 1,
    borderRadius: 35,
    marginTop: 20,
  },
  logintextstyle: {
    fontSize: 25,
    color: '#707070',
    fontWeight: 'bold',
  },
});

export default Second;
