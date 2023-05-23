import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Animated,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import LoginModal from '../../components/login-modal';

// import styles from './DiscoverFrame.scss';
// import BackButtonIcon from '../../assets/icons/angle-left.svg';
// import SearchIcon from '../../assets/icons/search.svg';
// import {REACT_APP_API_KEY} from '@env';
// import SkeletonContent from 'react-native-skeleton-content-nonexpo';
// const axios = require('axios');

const {width} = Dimensions.get('window');
const PADDING = 16;
const SEARCH_FULL_WIDTH = width - PADDING * 2; //search_width when unfocused
const SEARCH_SHRINK_WIDTH = width - PADDING - 70; //search_width when focused
const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

export default function ProfileScreen({navigation}) {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F6F7FB' }}>
      <View style={{ position: 'absolute', flex: 1, top: insets.top, right: 0, padding: 14 }}>
        <LoginModal />
      </View>

      <View style={{ position: 'absolute', flex: 1, alignItems: 'center' }}>
        <Image 
          source={require('../../assets/images/profile.png')} 
          style={{ width: 180, height: 140, marginBottom: 14 }} 
        />

        <Text style={{ marginBottom: 14, color: '#242746', fontSize: 20, fontWeight: 900 }}>Save your progress</Text>
        <Text style={{ marginBottom: 14, marginHorizontal: 40, color: '#242746', fontSize: 18, textAlign: 'center', lineHeight: 28}}>Create a Mimo profile to keep your progress safe</Text>
      </View>

      <TouchableOpacity 
        style={{ position: 'absolute', flex: 1, bottom: 0, margin: 14, backgroundColor: '#7F4BDE', borderRadius: 14, paddingVertical: 14, paddingHorizontal: 128 }}
        onPress={() => navigation.navigate('CreateProfileScreen')}
      >
        <Text style={{ color: '#FFFFFF', fontSize: 14, fontWeight: 900 }}>CREATE PROFILE</Text>
      </TouchableOpacity>
    </View>
  );
}