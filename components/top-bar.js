import React, { useCallback, useRef, useMemo } from "react";
import {
  View, Text, SafeAreaView, Image, TouchableOpacity, Pressable, Button, StyleSheet, Dimensions
} from 'react-native';
import { HeartsModal, CoinsModal, StreakProgressModal } from "./bottom-sheet";

const { width: SCREEN_WIDTH } = Dimensions.get('screen');

// import styles from '../../styles/App.scss';

const ModalHandle = () => {
    
  // styles
  const indicatorStyle = useMemo(
    () => [
      styles.modalIndicator,
      {
        backgroundColor: 'black',
      },
    ],
    ['black']
  );

  // render
  return (
    <View />
  );
};



export default function TopBar({navigation, bgColor, leftComponent: LeftComponent, onPress}) {
  // ref
  const heartsSheetRef = useRef(null);
  const coinsSheetRef = useRef(null);
  const streaksSheetRef = useRef(null);


  // variables
  const snapPoints = useMemo(() => ['90%'], []);

  // callbacks
  // const handleSheetChange = useCallback((index) => {
  //   console.log("handleSheetChange", index);
  // }, []);
  // const handleSnapPress = useCallback((index) => {
  //   sheetRef.current?.snapToIndex(index);
  // }, []);
  // const handleClosePress = useCallback(() => {
  //   sheetRef.current?.close();
  // }, []);
  const handleHeartsModalPress = useCallback(() => { // <---- use this one to call the modal
    heartsSheetRef.current?.present(); 
  }, []);

  const handleCoinsModalPress = useCallback(() => { // <---- use this one to call the modal
    coinsSheetRef.current?.present(); 
  }, []);

  const handleStreaksModalPress = useCallback(() => { // <---- use this one to call the modal
    streaksSheetRef.current?.present(); 
  }, []);

  return (
    <>
    <View style={{ backgroundColor: bgColor}}>
      <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 14, paddingHorizontal: 8 }}>
        {/* <TouchableOpacity
          style={{ marginHorizontal: 4 }}
          onPress={onPress}
        >
          <Image
            source={require('../assets/icons/round_arrow_back_black_48dp_2x.png')}
            style={{
              width: 28,
              height: 28,
              tintColor: '#FFFFFF',
            }}
          />
        </TouchableOpacity> */}

        <LeftComponent />
        
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
          <TouchableOpacity
            style={{ flexDirection: 'row', marginHorizontal: 4, borderRadius: 28, borderWidth: 1, borderColor: '#4A4D83', paddingHorizontal: 6, paddingVertical: 2, alignItems: 'center' }}
            onPress={handleHeartsModalPress}
          >
            <Image
              source={require('../assets/images/icons8-heart-suit-96.png')}
              style={{
                width: 28,
                height: 28,
                marginHorizontal: 1
              }}
            />
            <Text style={{ color: 'white' }}>5</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ flexDirection: 'row', marginHorizontal: 2, borderRadius: 28, borderWidth: 1, borderColor: '#4A4D83', paddingHorizontal: 6, paddingVertical: 2, alignItems: 'center' }}
            onPress={handleCoinsModalPress}
          >
            <Image
              source={require('../assets/images/icons8-coin-96.png')}
              style={{
                width: 28,
                height: 28,
                marginHorizontal: 1
              }}
            />
            <Text style={{ color: 'white' }}>220</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ flexDirection: 'row', marginHorizontal: 4, borderRadius: 28, borderWidth: 1, borderColor: '#4A4D83', paddingHorizontal: 6, paddingVertical: 2, alignItems: 'center' }}
            onPress={handleStreaksModalPress}
          >
            <Image
              source={require('../assets/images/icons8-fire-96.png')}
              style={{
                width: 28,
                height: 28,
                marginHorizontal: 1
              }}
            />
            <Text style={{ color: 'white' }}>0</Text>
          </TouchableOpacity>
        </View>
      </View>

      <HeartsModal 
        ref={heartsSheetRef}
        index={0}
        snapPoints={snapPoints}
        handleComponent={ModalHandle} 
      />

      <CoinsModal 
        ref={coinsSheetRef}
        index={0}
        snapPoints={snapPoints}
        handleComponent={ModalHandle} 
      />
      
      <StreakProgressModal 
        ref={streaksSheetRef}
        index={0}
        snapPoints={snapPoints}
        handleComponent={ModalHandle} 
      />
    </View>
    </>
    

      
      
      
      
      
      
    

    
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    paddingHorizontal: 16,
    paddingVertical: 5,
  },
  modalIndicator: {
    alignSelf: 'center',
    width: (8 * SCREEN_WIDTH) / 100,
    height: 5,
    borderRadius: 4,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});