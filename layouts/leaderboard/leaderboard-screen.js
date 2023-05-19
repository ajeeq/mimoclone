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

export default function LeaderboardScreen({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Leaderboard</Text>
    </View>
  );
}