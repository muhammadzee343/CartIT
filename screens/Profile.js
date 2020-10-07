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
  KeyboardAvoidingView,
} from 'react-native';

let windowSize = Dimensions.get('window');

class UserProfile extends React.Component {
  render() {
    return (
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <ImageBackground
          source={require('../images/bg.png')}
          style={styles.bgimagestyle}>
          <KeyboardAvoidingView>
            <View style={styles.innerContainer}>
              <Image
                style={styles.imgstyle}
                source={require('../images/ic_cartit.png')}
              />
            </View>
            <View style={styles.btncontainer}>
              <TextInput
                style={styles.textinputstyle}
                placeholder="Enter Name"
              />
              <TextInput
                style={styles.textinputstyle}
                placeholder="Email"
                keyboardType="email-address"
              />
              <TextInput
                style={styles.textinputstyle}
                placeholder="Phone Number"
                keyboardType="number-pad"
              />
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <TextInput
                  style={styles.addresstextinputstyle}
                  placeholder="Address"
                  keyboardType="default"
                />
                <TouchableOpacity>
                  <Image
                    source={require('../images/ic_select_location.png')}
                    style={{
                      height: 50,
                      width: 50,
                      borderColor: '#707070',
                      borderWidth: 1,
                      borderRadius: 25,
                      marginTop: 10,
                    }}
                  />
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={styles.textcontainer}
                onPress={() => {
                  this.props.navigation.navigate('Login');
                }}>
                <Text style={styles.textstyle}>SAVE</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  imgstyle: {
    height: 150,
    width: 100,
  },
  bgimagestyle: {
    height: '100%',
    width: '100%',
  },
  innerContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  imgstyle: {
    height: 100,
    width: 100,
  },
  btncontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
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
  addresstextinputstyle: {
    borderColor: '#707070',
    borderWidth: 1,
    borderRadius: 25,
    width: windowSize.width - 125,
    backgroundColor: '#fff',
    textAlign: 'center',
    marginTop: 10,
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
    marginTop: 15,
  },
  textstyle: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
  },
});
export default UserProfile;
