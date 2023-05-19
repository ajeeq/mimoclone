// https://github.com/janicduplessis/react-native-scrollable-header
// https://medium.com/appandflow/react-native-scrollview-animated-header-10a18cb9469e

// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import React, { useCallback, useRef, useMemo } from "react";
import {
  Animated,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
  RefreshControl,
  TouchableOpacity,
  Image,
  Dimensions
} from 'react-native';
// import BottomSheet, { BottomSheetView, BottomSheetModal, BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { CodingPathModal } from "./bottom-sheet";
// import Animated from 'react-native-reanimated';
// import BottomSheet from 'reanimated-bottom-sheet';

import TopBar from './top-bar';

const HEADER_MAX_HEIGHT = 300;
const HEADER_MIN_HEIGHT = Platform.OS === 'ios' ? 60 : 80;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const { width: SCREEN_WIDTH } = Dimensions.get('screen');

export default function CollapsibleHeader(props) {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     scrollY: new Animated.Value(
  //       // iOS has negative initial scroll value because content inset...
  //       Platform.OS === 'ios' ? -HEADER_MAX_HEIGHT : 0,
  //     ),
  //     refreshing: false,
  //   };
  // }

  const { children } = props;

  const [scrollY, setScrollY] = React.useState(
    new Animated.Value(
      Platform.OS === 'ios' ? -HEADER_MAX_HEIGHT : 0
    )
  );
  const [refreshing, setRefreshing] = React.useState(false);

  _renderScrollViewContent = () => {
    const data = Array.from({ length: 30 });
    return (
      <View style={styles.scrollViewContent}>
        {data.map((_, i) => (
          <View key={i} style={styles.row}>
            <Text>{i}</Text>
          </View>
        ))}
      </View>
    );
  }

  
    // Because of content inset the scroll value will be negative on iOS so bring
    // it back to 0.
    // const scrollY = Animated.add(
    //   this.state.scrollY,
    //   Platform.OS === 'ios' ? HEADER_MAX_HEIGHT : 0,
    // );

    const scrollYValue = Animated.add(
      scrollY,
      Platform.OS === 'ios' ? HEADER_MAX_HEIGHT : 0,
    );

    const headerTranslate = scrollYValue.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, -HEADER_SCROLL_DISTANCE],
      extrapolate: 'clamp',
    });

    const imageOpacity = scrollYValue.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 1, 0],
      extrapolate: 'clamp',
    });
    const imageTranslate = scrollYValue.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, 100],
      extrapolate: 'clamp',
    });

    const titleScale = scrollYValue.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 1, 0.8],
      extrapolate: 'clamp',
    });
    const titleTranslate = scrollYValue.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [0, 0, -8],
      extrapolate: 'clamp',
    });

    // ref
    const sheetRef = useRef(null);

    // variables
    const snapPoints = useMemo(() => ['90%'], []);

    // callbacks
    const handlePresentModalPress = useCallback(() => {
      sheetRef.current?.present();
    }, []);
    const handleSheetChanges = useCallback((index) => {
      console.log('handleSheetChanges', index);
    }, []);

    const CodingPath = () => {
      return (
        <TouchableOpacity
          style={{ flexDirection: 'row', marginHorizontal: 4, borderRadius: 28, borderWidth: 1, borderColor: '#4A4D83', paddingHorizontal: 6, paddingVertical: 2, alignItems: 'center' }}
          onPress={handlePresentModalPress}
          // onPress={() => sheetRef.current.snapTo(0)}
        >
          <Text style={{ color: 'white' }}>Web</Text>
          <Image
            source={require('../assets/icons/outline_expand_more_black_48dp_2x.png')}
            style={{
              width: 28,
              height: 28,
              marginHorizontal: 1,
              tintColor: '#FFFFFF'
            }}
          />
        </TouchableOpacity>
      );
    }

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

    return (
      <View style={styles.fill}>
        <StatusBar
          translucent
          barStyle="light-content"
          // backgroundColor="rgba(0, 0, 0, 0.251)"
          backgroundColor="#333661"
        />

        <Animated.ScrollView
          style={styles.fill}
          scrollEventThrottle={1}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: true },
          )}
          // refreshControl={
          //   <RefreshControl
          //     refreshing={this.state.refreshing}
          //     onRefresh={() => {
          //       this.setState({ refreshing: true });
          //       setTimeout(() => this.setState({ refreshing: false }), 1000);
          //     }}
          //     // Android offset for RefreshControl
          //     progressViewOffset={HEADER_MAX_HEIGHT}
          //   />
          // }

          // refreshControl={
          //   <RefreshControl
          //     refreshing={refreshing}
          //     onRefresh={() => {
          //       setRefreshing(true);
          //       setTimeout(() => setRefreshing(false), 1000);
          //     }}
          //     // Android offset for RefreshControl
          //     progressViewOffset={HEADER_MAX_HEIGHT}
          //   />
          // }

          // iOS offset for RefreshControl
          contentInset={{
            top: HEADER_MAX_HEIGHT,
          }}
          contentOffset={{
            y: -HEADER_MAX_HEIGHT,
          }}
        >
          {/* {this._renderScrollViewContent()} */}
          {children}
        </Animated.ScrollView>

        <Animated.View
          pointerEvents="none"
          style={[
            styles.header,
            { transform: [{ translateY: headerTranslate }],  },
          ]}
        >
          <Animated.Image
            style={[
              styles.backgroundImage,
              {
                opacity: imageOpacity,
                transform: [{ translateY: imageTranslate }],
              },
            ]}
            source={require('../assets/images/image.png')}
          />
        </Animated.View>

        <Animated.View style={{ position: 'absolute', height: 32, top: 0, left: 0, right: 0, marginTop: Platform.OS === 'ios' ? 28 : 38, justifyContent: 'center' }} >
          <TopBar bgColor='transparent' leftComponent={CodingPath} />
        </Animated.View>

        <CodingPathModal 
          ref={sheetRef}
          index={0}
          snapPoints={snapPoints}
          // onChange={handleSheetChanges}
          handleComponent={ModalHandle} 
        />
       
      </View>
    );
  
}

const styles = StyleSheet.create({
  fill: {
    flex: 1,
    backgroundColor: '#f8fafd'
  },
  content: {
    flex: 1,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#333661',
    // backgroundColor: 'transparent',
    overflow: 'hidden',
    height: HEADER_MAX_HEIGHT,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: null,
    height: HEADER_MAX_HEIGHT,
    resizeMode: 'cover',
  },
  bar: {
    backgroundColor: 'transparent',
    marginTop: Platform.OS === 'ios' ? 28 : 38,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  title: {
    color: 'white',
    fontSize: 18,
  },
  scrollViewContent: {
    // iOS uses content inset, which acts like padding.
    paddingTop: Platform.OS !== 'ios' ? HEADER_MAX_HEIGHT : 0,
  },
  row: {
    height: 40,
    margin: 16,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    justifyContent: 'center',
  },

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