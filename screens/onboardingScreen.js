import React from 'react';
import {View, Image} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

class OnboardingScreen extends React.Component {
  render() {
    return (
      <Onboarding
        onSkip={() => this.props.navigation.navigate('loginorsigup')}
        onDone={() => this.props.navigation.navigate('loginorsigup')}
        pages={[
          {
            backgroundColor: '#fff',
            image: (
              <Image
                source={require('../images/obj-1.png')}
                style={{height: 300, width: 200}}
              />
            ),
            title: 'Onboarding',
            subtitle: 'Done with React Native Onboarding Swiper',
          },
          {
            backgroundColor: '#fff',
            image: (
              <Image
                source={require('../images/obj-2.png')}
                style={{height: 300, width: 200}}
              />
            ),
            title: 'The Title',
            subtitle: 'This is the subtitle that sumplements the title.',
          },
          {
            backgroundColor: '#fff',
            image: (
              <Image
                source={require('../images/obj-3.png')}
                style={{height: 300, width: 200}}
              />
            ),
            title: 'Triangle',
            subtitle: "Beautiful, isn't it?",
          },
        ]}
      />
    );
  }
}

export default OnboardingScreen;
