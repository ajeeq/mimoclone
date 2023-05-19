import React, { useCallback, useRef, useMemo, forwardRef } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import BottomSheet, { BottomSheetView, BottomSheetModal, BottomSheetModalProvider } from "@gorhom/bottom-sheet";

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

export const CodingPathModal = forwardRef((props, ref) => {
  // ref
  const sheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['90%'], []);

  // callbacks
  const handleSheetChange = useCallback((index) => {
    console.log("handleSheetChange", index);
  }, []);
  const handleSnapPress = useCallback((index) => {
    sheetRef.current?.snapToIndex(index);
  }, []);
  const handleClosePress = useCallback(() => {
    sheetRef.current?.close();
  }, []);
  const handlePresentModalPress = useCallback(() => { // <---- use this one to call the modal
    sheetRef.current?.present(); 
  }, []);

  // render
  return (
    <BottomSheetModalProvider style={{flex:1}}>
      <BottomSheetModal
        ref={ref}
        index={props.index}
        snapPoints={props.snapPoints}
        handleComponent={props.handleComponent}
      >
        <View>
          <Text>Coding Path</Text>
        </View>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
});

export const HeartsModal = forwardRef((props, ref) => {
  // ref
  const sheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ["25%", "50%", "90%"], []);

  // callbacks
  const handleSheetChange = useCallback((index) => {
    console.log("handleSheetChange", index);
  }, []);
  const handleSnapPress = useCallback((index) => {
    sheetRef.current?.snapToIndex(index);
  }, []);
  const handleClosePress = useCallback(() => {
    sheetRef.current?.close();
  }, []);

  // render
  return (
    <BottomSheetModalProvider>
      <View style={{ flex:1 }}>
        <BottomSheetModal
          ref={ref}
          index={props.index}
          snapPoints={props.snapPoints}
          handleComponent={props.handleComponent}
        >
          <View style={{ flex:1 }}>
            <Text>Hearts Modal</Text>
          </View>
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>
  );
});

export const CoinsModal = forwardRef((props, ref) => {
  // ref
  const sheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ["25%", "50%", "90%"], []);

  // callbacks
  const handleSheetChange = useCallback((index) => {
    console.log("handleSheetChange", index);
  }, []);
  const handleSnapPress = useCallback((index) => {
    sheetRef.current?.snapToIndex(index);
  }, []);
  const handleClosePress = useCallback(() => {
    sheetRef.current?.close();
  }, []);

  // render
  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        ref={ref}
        index={props.index}
        snapPoints={props.snapPoints}
        handleComponent={props.handleComponent}
      >
        <View style={styles.contentContainer}>
          <Text>Coins Modal</Text>
        </View>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
});

export const StreakProgressModal = forwardRef((props, ref) => {
  // ref
  const sheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ["25%", "50%", "90%"], []);

  // callbacks
  const handleSheetChange = useCallback((index) => {
    console.log("handleSheetChange", index);
  }, []);
  const handleSnapPress = useCallback((index) => {
    sheetRef.current?.snapToIndex(index);
  }, []);
  const handleClosePress = useCallback(() => {
    sheetRef.current?.close();
  }, []);

  // render
  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        ref={ref}
        index={props.index}
        snapPoints={props.snapPoints}
        handleComponent={props.handleComponent}
      >
        <View>
          <Text>Streak Progress Modal</Text>
        </View>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 200,
  },
});