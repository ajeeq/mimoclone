import React from 'react';
import { View, Animated, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function SelectionButton({
  name,
  onPress,
  disabled
}) {
  return (
    // <TouchableOpacity
    //   onPress={() => handleAddAnswer('Post')}
    //   disabled={!isButtonEnabled}
    //   style={{ backgroundColor: isButtonEnabled ? 'lightblue' : 'gray', borderRadius: 5, margin: 10 }}
    // >
    //   <Text style={{ fontSize: 14, paddingVertical: 10, paddingHorizontal: 20 }}>{name}</Text>
    // </TouchableOpacity>

    <TouchableOpacity
      onPress={onPress}
      disabled={true}
      style={styles.button}
    >
      <Text style={{ fontSize: 14, paddingVertical: 10, paddingHorizontal: 20 }}>{name}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FFFFFF', 
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    borderRadius: 5, 
    margin: 5
  }
});