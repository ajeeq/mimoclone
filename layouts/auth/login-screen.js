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

import { GoogleIcon, FacebookIcon } from '../../components/icons';

export default function LoginScreen({navigation}) {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#242746' }}>
      <TouchableOpacity
        style={{ position: 'absolute', flex: 1, top: insets.top, left: 0, padding: 14 }}
        onPress={() => navigation.goBack()}
      >
        <Image
          source={require('../../assets/icons/round_arrow_back_black_48dp_2x.png')}
          style={{
            width: 28,
            height: 28,
            tintColor: '#FFFFFF',
          }}
        />
      </TouchableOpacity>

      <View style={{ flex: 1,  marginTop: 180 }}>
        <Image 
          source={require('../../assets/images/login-illustration.png')} 
          style={{width: 380, height: 180, marginBottom: 14 }} 
        />

        <Text style={{ marginBottom: 20, marginHorizontal: 40, textAlign: 'center', color: '#FFFFFF', fontSize: 24, fontWeight: 900 }}>Welcome back you've been missed!</Text>
      </View>

      <View style={{ position: 'absolute', flex: 1, bottom: 0 }}>
        <TouchableOpacity 
          style={{ borderRadius: 14, borderWidth: 3, borderColor: '#7F4BDE', paddingVertical: 14, marginTop: 8 }}
        >
          <Text style={{ color: '#7F4BDE', fontSize: 16, fontWeight: 900, textAlign: 'center' }}>LOG IN WITH EMAIL</Text>
        </TouchableOpacity>

        <View style={{ marginTop: 16 }}>
          <Text style={{ textAlign: 'center', color: '#FFFFFF' }}>Or continue with:</Text>

          <View style={{ flexDirection: 'row', justifyContent: 'center'}}>
            <GoogleIcon />
            <FacebookIcon />
          </View>
        </View>
        
        <View style={{ textAlign: 'center', padding: 14 }}>
          <Text style={{ textAlign: 'center', color: '#FFFFFF' }}>By signing up you agree to our Terms and Privacy Policy</Text>
          <Text style={{ textAlign: 'center', color: '#FFFFFF' }}>You can delete your account in your settings</Text>
        </View>
        
      </View>
      
    </View>
  );
}