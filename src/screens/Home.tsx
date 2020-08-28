import React from 'react';
import { TouchableOpacity,Text } from 'react-native';

import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
// import Button from '../components/Button';
import { Navigation } from '../navigationconfig';

type Props = {
  navigation: Navigation;
};

const Home = ({ navigation }: Props) => (
  <Background>
    <Logo />
    <Header>Let’s startasdasd</Header>
    <Paragraph>
      Your amazing app starts here. Open you favourite code editor and start
      editing this project.
    </Paragraph>
   <TouchableOpacity
      
      onPress={() => navigation.navigate('Weather')}
    >
    <Text>Click</Text>
    </TouchableOpacity>
  </Background>
);

export default Home;