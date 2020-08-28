import React, { memo } from 'react';
import {
  ImageBackground,
  StyleSheet,
  View
} from 'react-native';

type Props = {
  children: React.ReactNode;
};

const Background = ({ children }: Props) => (
  <ImageBackground
    source={require('../assets/background_dot.png')}
    resizeMode="repeat"
    style={styles.background}
  >
    <View style={{margin:10}}>
    {children}
    </View>
     
  </ImageBackground>
);

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
  },
  container: {
    flex: 1,
    padding: 10,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default memo(Background);
