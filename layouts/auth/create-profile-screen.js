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

export default function CreateProfileScreen({navigation}) {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F6F7FB' }}>
      <TouchableOpacity
        style={{ position: 'absolute', flex: 1, top: insets.top, right: 0, padding: 14 }}
        onPress={() => navigation.goBack()}
      >
        <Text style={{ color: '#242746', fontSize: 14, fontWeight: 900 }}>SKIP</Text>
      </TouchableOpacity>

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 180 }}>
        <Text style={{ paddingBottom: 20, marginHorizontal: 40, textAlign: 'center', color: '#242746', fontSize: 24, fontWeight: 900 }}>Create an account to save your progress</Text>
        
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: 'row', paddingBottom: 20, alignItems: 'center' }}>
            <Image
              source={require('../../assets/images/icons8-fire-96.png')}
              style={{
                width: 40,
                height: 40,
                marginRight: 10,
              }}
            />
            <View>
              <Text style={{ color: '#242746', fontSize: 18, fontWeight: 900 }}>Track your progress</Text>
              <Text>Start a streak and form a habit</Text>
            </View>
          </View>
          
          <View style={{ flexDirection: 'row', paddingBottom: 20, alignItems: 'center' }}>
            <Image
              source={require('../../assets/images/icons8-trophy-96.png')}
              style={{
                width: 40,
                height: 40,
                marginRight: 10,
              }}
            />
            <View>
            <Text style={{ color: '#242746', fontSize: 18, fontWeight: 900 }}>Compete with others</Text>
              <Text>Make it to the top of your</Text>
            </View>
          </View>
          
          <View style={{ flexDirection: 'row', paddingBottom: 20, alignItems: 'center' }}>
            <Image
              source={require('../../assets/images/icons8-heart-suit-96.png')}
              style={{
                width: 40,
                height: 40,
                marginRight: 10,
              }}
            />
            <View>
            <Text style={{ color: '#242746', fontSize: 18, fontWeight: 900 }}>Connect with friends</Text>
              <Text>Learn together and motivate</Text>
            </View>
          </View>

        </View>
      </View>

        <View style={{ position: 'absolute', flex: 1, bottom: 0 }}>
          <TouchableOpacity 
            style={{ backgroundColor: '#4286F5', borderRadius: 14, paddingVertical: 14, }}
          >
            <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 900, textAlign: 'center' }}>SIGN UP WITH GOOGLE</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={{ backgroundColor: '#4167B2', borderRadius: 14, paddingVertical: 14, marginTop: 8}}
          >
            <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 900, textAlign: 'center' }}>SIGN UP WITH FACEBOOK</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={{ backgroundColor: '#F6F7FB', borderRadius: 14, borderWidth: 3, borderColor: '#7F4BDE',paddingVertical: 14, marginTop: 8 }}
          >
            <Text style={{ color: '#7F4BDE', fontSize: 16, fontWeight: 900, textAlign: 'center' }}>SIGN UP WITH EMAIL</Text>
          </TouchableOpacity>
          
          <View style={{ textAlign: 'center', padding: 14 }}>
            <Text style={{ textAlign: 'center' }}>By signing up you agree to our Terms and Privacy Policy</Text>
            <Text style={{ textAlign: 'center' }}>You can delete your account in your settings</Text>
          </View>
          
        </View>
      
    </View>
  );
}