import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, TextInput, Alert } from 'react-native';
import Background from '../components/Background';
import Header from '../components/Header';
import credentials from "../../credentials.json";
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import { emailValidator, passwordValidator } from '../core/utils';
import { Navigation } from '../navigationconfig';

type Props = {
  navigation: Navigation;
};

const LoginScreen = ({ navigation }: Props) => {
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });

  const _onLoginPressed = () => {
    const data = credentials.users;
    console.log(email.value);
    console.log(password.value);
    // email.value = "Admin";
    // password.value = "Admin123";
    if (data.find(user => user.name === email.value && user.password === password.value)) {
      navigation.navigate('Home');
    } else {
      Alert.alert("Wrong Credentials");
    }

  };

  return (
    <Background>
      <Header>Welcome</Header>
      <Input
        placeholder="Email"
        leftIcon={{ type: 'font-awesome', name: 'comment' }}
        style={styles}
        onChangeText={text => setEmail({ value: text, error: '' })}
      />
      <Input
        placeholder="Password"
        leftIcon={{ type: 'font-awesome', name: 'comment' }}
        style={styles}
        onChangeText={text => setPassword({ value: text, error: '' })}
      />
      <Button title="Login" onPress={_onLoginPressed} icon={
        <Icon
          name="arrow-right"
          size={15}
          color="white"
        />
      }
        iconRight />


    </Background>
  );
};

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
    marginTop: 8,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  label: {
    color: "#000",
  },
  link: {
    fontWeight: 'bold',
    color: "blue",
  },
});

export default LoginScreen;