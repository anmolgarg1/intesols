import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props = {
  children: React.ReactNode;
};

const Header = ({ children }: Props) => (
  <View style={{ alignItems: 'center', }}>
    <Text style={styles.header}>{children}</Text>

  </View>
);

const styles = StyleSheet.create({
  header: {
    fontSize: 26,
    color: "#000",
    fontWeight: 'bold',
    paddingVertical: 14,
  },
});

export default memo(Header);
