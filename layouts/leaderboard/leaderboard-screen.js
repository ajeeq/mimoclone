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

export default function LeaderboardScreen({navigation}) {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F6F7FB' }}>
      {/* <TouchableOpacity style={{ position: 'absolute', flex: 1, top: insets.top, right: 0 }}>
        <Text style={{ padding: 14, color: '#242746', fontSize: 16, fontWeight: 900 }}>LOG IN</Text>
      </TouchableOpacity> */}
      
      <View style={{ position: 'absolute', flex: 1, top: insets.top, right: 0, padding: 14 }}>
        <LoginModal />
      </View>

      <View style={{ position: 'absolute', flex: 1, alignItems: 'center' }}>
        <Image 
          source={require('../../assets/images/leaderboard.png')} 
          style={{ width: 140, height: 140, marginBottom: 14 }} 
        />

        <Text style={{ marginBottom: 14, color: '#242746', fontSize: 20, fontWeight: 900 }}>Compete with others</Text>
        <Text style={{ marginBottom: 14, marginHorizontal: 40, color: '#242746', fontSize: 18, textAlign: 'center', lineHeight: 28}}>Create a Mimo profile to start competing with others</Text>
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