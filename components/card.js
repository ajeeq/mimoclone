{/* <a href="https://www.flaticon.com/free-icons/html" title="html icons">Html icons created by Freepik - Flaticon</a> */}

import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

// import Html5 from '../assets/images/purple-heart.svg'

export default function Card ({ onPress, title, backgroundColor, textColor, tintColor }) {
  return (
    <View style={[ 
      styles.container,  
      {
        backgroundColor: backgroundColor,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
      } 
    ]}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/icons/html.png')}
            style={[styles.image, {tintColor: tintColor}]}
          />
        </View>
        <Text style={[styles.title, {color: textColor}]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#a39eff',
    borderRadius: 14,
    // flexDirection: 'column',
    // alignItems: 'flex-start',
    // overflow: 'hidden',
    height: 140,
    width: 188,
    padding: 10,
    margin: 6,
  },
  imageContainer: {
    padding: 4,
    borderRadius: 4
  },
  image: {
    height: 30,
    width: 30,
  },
  title: {
    // color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});