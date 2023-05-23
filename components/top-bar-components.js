import React, { useCallback, useRef, useMemo } from "react";
import {
  View, 
  Text, 
  Image, 
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from 'react-native';
import BottomSheet, { BottomSheetView, BottomSheetModal, BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { HeartsModal, CoinsModal, StreakProgressModal } from "./bottom-sheet";

const { width: SCREEN_WIDTH } = Dimensions.get('screen');

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

export const TopBarComponentRight = () => {
  // ref
  const heartsSheetRef = useRef(null);
  const coinsSheetRef = useRef(null);
  const streaksSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['90%'], []);

  const handleHeartsModalPress = useCallback(() => { // <---- use this one to call the modal
    heartsSheetRef.current?.present(); 
  }, []);

  const handleCoinsModalPress = useCallback(() => { // <---- use this one to call the modal
    coinsSheetRef.current?.present(); 
  }, []);

  const handleStreaksModalPress = useCallback(() => { // <---- use this one to call the modal
    streaksSheetRef.current?.present(); 
  }, []);

  return(
    <BottomSheetModalProvider>
      <TouchableOpacity
        style={{ flexDirection: 'row', marginHorizontal: 4, borderRadius: 28, borderWidth: 1, borderColor: '#4A4D83', paddingHorizontal: 6,  alignItems: 'center' }}
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
        style={{ flexDirection: 'row', marginHorizontal: 2, borderRadius: 28, borderWidth: 1, borderColor: '#4A4D83', paddingHorizontal: 6,  alignItems: 'center' }}
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
        style={{ flexDirection: 'row', marginHorizontal: 4, borderRadius: 28, borderWidth: 1, borderColor: '#4A4D83', paddingHorizontal: 6,  alignItems: 'center' }}
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
      
      <View>
        {/* <HeartsModal
          ref={heartsSheetRef}
          index={0}
          snapPoints={snapPoints}
          handleComponent={ModalHandle} 
        /> */}

        {/* <BottomSheetModalProvider> */}
          {/* <View style={{ flex:1 }}> */}
            <BottomSheetModal
              ref={heartsSheetRef}
              index={0}
              snapPoints={snapPoints}
              handleComponent={ModalHandle}
            >
              <View style={{ flex:1 }}>
                <Text>Hearts Modal</Text>
              </View>
            </BottomSheetModal>
          {/* </View> */}
        {/* </BottomSheetModalProvider> */}

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
      
    </BottomSheetModalProvider>
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