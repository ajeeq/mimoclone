import React, {useState, useEffect, useRef} from 'react';
import {
  View, Text, SafeAreaView, Image, TouchableOpacity, Pressable, Button, StyleSheet
} from 'react-native';

import styles from '../../styles/App.scss'

import SelectionButton from '../../components/selection-button';

export default function HTMLOneScreen({navigation}) {
  const [answers, setAnswers] = useState([]);
  const [isButtonEnabled, setIsButtonEnabled] = useState(true);
  const [flag1, setFlag1] = useState(true);

  const handleAddAnswer = (answer) => {
    // setIsButtonEnabled(false);
    setAnswers((prevAnswers) => [...prevAnswers, answer]);
  };

  const handleRemoveAnswer = () => {
    setAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers.pop();
      return newAnswers;
    });
    if (answers.length === 1) setIsButtonEnabled(true);
  };

  return (
    <View style={[styles.outerContainer, stylesExtra.outerContainer]}>
      <View style={{ paddingHorizontal: 16, paddingVertical: 16, backgroundColor: '#F6F7FB' }}>
        <Text style={{ fontSize: 16 }}>Code a button that has the text Post.</Text>
      </View>

      <View style={{ borderBottomWidth: 1, borderBottomColor: '#F6F7FB', padding: 16, backgroundColor: '#FFFFFF' }}>
        <Text style={{ fontSize: 12 }}>index.html</Text>
      </View>

      <View style={{ backgroundColor: '#FFFFFF', paddingHorizontal: 16, paddingVertical: 32 }}>
        <View style={{  flexDirection: 'row' }}>
          {answers.map((answer, index) => (
            answer 
            ? <View style={{ padding: 0}} key={index}>
                <Text>{answer}</Text>
              </View>
            : <View style={{ paddingVertical: 32 }}/>
            
          ))
          }
        </View>
      </View>
      
      <View style={{  position: 'absolute', bottom: 0, backgroundColor: '#FFFFFF' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 16, marginVertical: 10 }}>
          <TouchableOpacity 
            onPress={() => setAnswers([])}
            style={{ marginHorizontal: 14 ,transform: [{scaleX: -1}] }}
          >
            <Image
              source={require('../../assets/icons/outline_refresh_black_24dp.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity 
            onPress={handleRemoveAnswer}
            style={{ marginHorizontal: 14 }}
          >
            <Image
              source={require('../../assets/icons/outline_backspace_black_24dp.png')}
            />
          </TouchableOpacity>
          
          <View style={{ flex: 1, alignItems: 'flex-end' }}>
            <TouchableOpacity 
              onPress={handleRemoveAnswer}
              style={{ backgroundColor: '#7F4BDE', borderRadius: 14, elevation: 3, padding: 6 }}
            >
              <Image
                source={require('../../assets/icons/round_play_arrow_black_24dp.png')}
                style={{
                  width: 40,
                  height: 40,
                  tintColor: '#FFFFFF'
                }}
              />
            </TouchableOpacity>
          </View>
          
        </View>

        <View style={{ padding: 10, backgroundColor: '#FFFFFF' }}>
          <View style={{ flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap' }}>
            <SelectionButton onPress={() => handleAddAnswer('Post')} name={'Post'} />
            <SelectionButton onPress={() => handleAddAnswer('<')} name={'<'} />
            <SelectionButton onPress={() => handleAddAnswer('button')} name={'button'} />
            <SelectionButton onPress={() => handleAddAnswer('/')} name={'/'} />
            <SelectionButton onPress={() => handleAddAnswer('>')} name={'>'} />
            <SelectionButton onPress={() => handleAddAnswer('<')} name={'<'} />
            <SelectionButton onPress={() => handleAddAnswer('button')} name={'button'} />
            <SelectionButton onPress={() => handleAddAnswer('>')} name={'>'} />
          </View>
        </View>
      </View>
    </View>
      
    
  );
}


const stylesExtra = StyleSheet.create({
  outerContainer: {
    backgroundColor: '#F6F7FB'
  }
  
})