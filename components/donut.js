import React from 'react';
import { View, Animated, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Svg, {G, Circle} from 'react-native-svg';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export default function Donut({
  percentage = 15,
  radius = 60,
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
  
  React.useEffect(() => {
  })

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{justifyContent: 'center', alignItems: 'center', padding: 12}}>
        <Svg 
          width={radius*2} 
          height={radius*2} 
          viewBox={`0 0 ${halfCircle*2} ${halfCircle*2}`}
        >
          <G rotation={'-90'} origin={`${halfCircle}, ${halfCircle}`}>
            <Circle 
              cx='50%'
              cy='50%'
              stroke={'#E4E6F2'}
              strokeWidth={strokeWidth}
              r={radius}
              fill='transparent'
              // strokeOpacity={0.2}
            />
            
            <AnimatedCircle //stroke is here
              ref={circleRef}
              cx='50%'
              cy='50%'
              stroke={strokeColor}
              strokeWidth={strokeWidth}
              r={radius}
              fill='transparent'
              strokeDasharray={circleCircumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap='round'
            />
          </G>
        </Svg>

        <Image 
          source={require('../assets/images/thunder.png')} 
          style={
            {tintColor: '#E4E6F2', width: 40, height: 40, position: 'absolute', alignSelf: 'center', justifyContent: 'center', alignItems: 'center'}
          } 
        />
      </View>
    </TouchableOpacity>
  )
}