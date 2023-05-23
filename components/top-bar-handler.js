import React, { useCallback, useRef, useMemo } from "react";
import {
  View, Text, SafeAreaView, Image, TouchableOpacity, Pressable, Button, StyleSheet, Dimensions
} from 'react-native';
import { HeartsModal, CoinsModal, StreakProgressModal } from "./bottom-sheet";

const { width: SCREEN_WIDTH } = Dimensions.get('screen');

// import styles from '../../styles/App.scss';

// const ModalHandle = () => {
    
//   // styles
//   const indicatorStyle = useMemo(
//     () => [
//       styles.modalIndicator,
//       {
//         backgroundColor: 'black',
//       },
//     ],
//     ['black']
//   );

//   // render
//   return (
//     <View />
//   );
// };



export default function TopBarHandler({navigation, bgColor, leftComponent: LeftComponent, rightComponent: RightComponent, onPress}) {
  // ref
  // const heartsSheetRef = useRef(null);
  // const coinsSheetRef = useRef(null);
  // const streaksSheetRef = useRef(null);


  // variables
  // const snapPoints = useMemo(() => ['90%'], []);

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
  // const handleHeartsModalPress = useCallback(() => { // <---- use this one to call the modal
  //   heartsSheetRef.current?.present(); 
  // }, []);

  // const handleCoinsModalPress = useCallback(() => { // <---- use this one to call the modal
  //   coinsSheetRef.current?.present(); 
  // }, []);

  // const handleStreaksModalPress = useCallback(() => { // <---- use this one to call the modal
  //   streaksSheetRef.current?.present(); 
  // }, []);

  return (
    <>
      <View style={{ backgroundColor: bgColor}}>
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 14, paddingHorizontal: 8 }}>

          <LeftComponent />
          
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
            <RightComponent />
          </View>
        </View>

        
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