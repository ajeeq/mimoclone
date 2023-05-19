import React from 'react';
import { View, Animated, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Svg, {G, Circle} from 'react-native-svg';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export default function VerticalCircleSpacer({
  percentage = 15,
  radius = 3,
  strokeWidth = 10,
  duration = 500,
  strokeColor = '#7F4BDE',
  delay = 0,
  textColor,
  max = 100,
  onPress
}) {
  const halfCircle = radius + strokeWidth;
  const circleCircumference = 2*Math.PI*radius;
  const circleRef = React.useRef();
  const maxPercentage = 100 * percentage / max;
  const strokeDashoffset = circleCircumference - (circleCircumference*maxPercentage) / 100;

  const threeHeaders = Array.from({length: 3}, (_, index) => {
    return (
      <Svg 
        width={radius*2} 
        height={radius*2} 
        viewBox={`0 0 ${halfCircle*2} ${halfCircle*2}`}
        key={index}
        style={{margin: 3.5}}
      >
        <Circle 
          cx='50%'
          cy='50%'
          r={halfCircle}
          fill='#E4E6F2'
        />
      </Svg>
    )
  });

  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      {threeHeaders}
    </View>
  )
}