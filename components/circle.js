import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function Circle ({ onPress, logo, progress }) {

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.circle}>
        <Image source={logo} style={styles.logo} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#7F4BDE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 40,
    height: 40,
  },
});