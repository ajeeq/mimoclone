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

import styles from '../../styles/App.scss';

import { CodingPathModal } from '../../components/bottom-sheet';
import CollapsibleHeader from '../../components/collapsible-header';
import TopBarHandler from '../../components/top-bar-handler';
import Donut from '../../components/donut';
import DonutLocked from '../../components/donut-locked';
import VerticalCircleSpacer from '../../components/vertical-circle-spacer';
import Sliver from '../../components/sliver';
import Circle from '../../components/circle';
import str from '../../components/content'
// import zIndex from '@mui/material/styles/zIndex';
import ReanimatedBottomSheet from '../../components/reanimated-bottom-sheet';

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

export default function LearnScreen({navigation}) {
  return (
    <View style={styles.outerContainer}>
      {/* <TopBarHandler style={{ position: 'absolute' }} /> */}
      {/* <Sliver> */}
        {/* <Text style={styles.title}>This is Title</Text>
        <Text style={styles.content}>{str}</Text> */}
        {/* // content should be here
      </Sliver> */}
      
      <CollapsibleHeader>
        <View style={[stylesExtra.circleList, {paddingTop: 300}]}>
          {/* <CodingPathModal /> */}
          <Donut onPress={() => navigation.navigate('HtmlBasicsScreen')} />
          <Text style={stylesExtra.circleTitle}>HTML Basics</Text>

          <VerticalCircleSpacer />

          <DonutLocked/>
          <Text style={stylesExtra.circleTitle}>CSS Basics</Text>

          <VerticalCircleSpacer />

          <DonutLocked />
          <Text style={stylesExtra.circleTitle}>JavaScripts Basics</Text>

          <VerticalCircleSpacer />

          <DonutLocked />
          <Text style={stylesExtra.circleTitle}>HTML Intermediate</Text>

          <VerticalCircleSpacer />

          <DonutLocked />
          <Text style={stylesExtra.circleTitle}>Semantic HTML</Text>

          <VerticalCircleSpacer />

          <DonutLocked />
          <Text style={stylesExtra.circleTitle}>CSS Intermediate</Text>

          <VerticalCircleSpacer />

          <DonutLocked />
          <Text style={stylesExtra.circleTitle}>Types and Comparisons</Text>

          <VerticalCircleSpacer />

          <DonutLocked />
          <Text style={stylesExtra.circleTitle}>Accessibility Basics</Text>

          <VerticalCircleSpacer />

          <DonutLocked />
          <Text style={stylesExtra.circleTitle}>Html Forms</Text>

          <VerticalCircleSpacer />
          
          <DonutLocked />
          <Text style={stylesExtra.circleTitle}>CSS Layouts Fundamentals</Text>

          <VerticalCircleSpacer />

          <DonutLocked />
          <Text style={stylesExtra.circleTitle}>Conditionals</Text>

          <VerticalCircleSpacer />

          <DonutLocked />
          <Text style={stylesExtra.circleTitle}>Flexbox Basics</Text>

          <VerticalCircleSpacer />

          <DonutLocked />
          <Text style={stylesExtra.circleTitle}>Flexbox Containers</Text>

          <VerticalCircleSpacer />

          <DonutLocked />
          <Text style={stylesExtra.circleTitle}>Flexbox Items</Text>

          <VerticalCircleSpacer />

          <DonutLocked />
          <Text style={stylesExtra.circleTitle}>Loops</Text>

          <VerticalCircleSpacer />

          <DonutLocked />
          <Text style={stylesExtra.circleTitle}>Version Control</Text>

          <VerticalCircleSpacer />

          <DonutLocked />
          <Text style={stylesExtra.circleTitle}>CSS Grid</Text>

          <VerticalCircleSpacer />

          <DonutLocked />
          <Text style={stylesExtra.circleTitle}>Arrays</Text>

          <VerticalCircleSpacer />

          <DonutLocked />
          <Text style={stylesExtra.circleTitle}>Functions</Text>

          <VerticalCircleSpacer />

          <DonutLocked />
          <Text style={stylesExtra.circleTitle}>Objects</Text>

          <VerticalCircleSpacer />

          <DonutLocked />
          <Text style={stylesExtra.circleTitle}>Applied Functions</Text>

          <VerticalCircleSpacer />

          <DonutLocked />
          <Text style={stylesExtra.circleTitle}>ES6</Text>

          <VerticalCircleSpacer />

          <DonutLocked />
          <Text style={stylesExtra.circleTitle}>Array Operations</Text>

          <VerticalCircleSpacer />

          <DonutLocked />
          <Text style={stylesExtra.circleTitle}>Dynamic webpages</Text>

          <VerticalCircleSpacer />

          <DonutLocked />
          <Text style={stylesExtra.circleTitle}>The Document Object Model</Text>

          <VerticalCircleSpacer />

          <DonutLocked />
          <Text style={stylesExtra.circleTitle}>JavaScript Events</Text>

          <VerticalCircleSpacer />

          <DonutLocked />
          <Text style={stylesExtra.circleTitle}>Synchrony and Asynchrony in JS</Text>

          <VerticalCircleSpacer />

          <DonutLocked />
          <Text style={stylesExtra.circleTitle}>JavaScript Classes</Text>

          <VerticalCircleSpacer />

          <DonutLocked />
          <Text style={stylesExtra.circleTitle}>Modules, Libraries, and Node</Text>

          <VerticalCircleSpacer />

          <DonutLocked />
          <Text style={stylesExtra.circleTitle}>React Basics</Text>

          <VerticalCircleSpacer />

          <DonutLocked />
          <Text style={stylesExtra.circleTitle}>React Hooks</Text>

          <VerticalCircleSpacer />

          <DonutLocked />
          <Text style={stylesExtra.circleTitle}>React Advanced</Text>

          <VerticalCircleSpacer />

          <DonutLocked />
          <Text style={stylesExtra.circleTitle}>SQL Basics</Text>

          <VerticalCircleSpacer />

          <DonutLocked />
          <Text style={stylesExtra.circleTitle}>SQL Table Management</Text>

          <VerticalCircleSpacer />

          <DonutLocked />
          <Text style={stylesExtra.circleTitle}>SQL Filters</Text>

          <VerticalCircleSpacer />

          <DonutLocked />
          <Text style={stylesExtra.circleTitle}>SQL Aggregate Functions</Text>

          <VerticalCircleSpacer />

          <DonutLocked />
          <Text style={stylesExtra.circleTitle}>SQL Joins</Text>

          <VerticalCircleSpacer />

          <DonutLocked />
          <Text style={stylesExtra.circleTitle}>SQL Subqueries</Text>

          <VerticalCircleSpacer />

          <DonutLocked />
          <Text style={stylesExtra.circleTitle}>Introduction to Backend</Text>

          <VerticalCircleSpacer />

          <DonutLocked />
          <Text style={stylesExtra.circleTitle}>Building an Express App</Text>

          <VerticalCircleSpacer />

          <DonutLocked />
          <Text style={stylesExtra.circleTitle}>Structuring Endpoints</Text>

          <VerticalCircleSpacer />

          <DonutLocked />
          <Text style={stylesExtra.circleTitle}>Interacting with a Database</Text>

          <VerticalCircleSpacer />

        </View>
      </CollapsibleHeader>
    </View>
  );
}

const stylesExtra = StyleSheet.create({
  circleList: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  circleTitle: {
    fontSize: 20,
    fontWeight: 900,
    padding: 12
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});