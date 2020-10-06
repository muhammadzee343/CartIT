import React from 'react';
import {View, Image} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

class OnboardingScreen extends React.Component {
  render() {
    return (
      <Onboarding
        onSkip={() => this.props.navigation.navigate('second')}
        onDone={() => this.props.navigation.navigate('second')}
        pages={[
          {
            backgroundColor: '#fff',
            image: (
              <Image
                source={require('../images/obj-1.png')}
                style={{height: '40%', width: '70%'}}
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
                style={{height: '60%', width: '60%'}}
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
                style={{height: '60%', width: '60%'}}
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
