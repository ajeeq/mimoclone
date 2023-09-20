import React from 'react';
import { View, Animated, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Svg, {G, Circle} from 'react-native-svg';


// export const GoogleIcon = () => {
//   <View style={{backgroundColor:'red'}}>
//     <Image 
//       source={require('../assets/icons/search.png')} 
//       style={{ width: 380, height: 180, }} 
//     />
//   </View>
  
// }

export const GoogleIcon = ({
  percentage = 15,
  radius = 20,
  strokeWidth = 10,
  duration = 500,
  strokeColor = '#7F4BDE',
  delay = 0,
  textColor,
  max = 100,
  onPress
}) => {
  const halfCircle = radius + strokeWidth;
  const circleCircumference = 2*Math.PI*radius;
  const circleRef = React.useRef();
  const maxPercentage = 100 * percentage / max;
  const strokeDashoffset = circleCircumference - (circleCircumference*maxPercentage) / 100;

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{justifyContent: 'center', alignItems: 'center', padding: 12}}>
        <Svg 
          width={radius*2} 
          height={radius*2} 
          viewBox={`0 0 ${halfCircle*2} ${halfCircle*2}`}
        >
          <Circle 
            cx='50%'
            cy='50%'
            r={halfCircle}
            fill='#FFFFFF'
            // strokeWidth={strokeWidth}
          />
        </Svg>

        <Image 
          source={require('../assets/icons/search.png')} 
          style={
            { width: 20, height: 20, position: 'absolute', alignSelf: 'center', justifyContent: 'center', alignItems: 'center'}
          } 
        />
      </View>
    </TouchableOpacity>
  )
}

export const FacebookIcon = ({
  percentage = 15,
  radius = 20,
  strokeWidth = 10,
  duration = 500,
  strokeColor = '#7F4BDE',
  delay = 0,
  textColor,
  max = 100,
  onPress
}) => {
  const halfCircle = radius + strokeWidth;
  const circleCircumference = 2*Math.PI*radius;
  const circleRef = React.useRef();
  const maxPercentage = 100 * percentage / max;
  const strokeDashoffset = circleCircumference - (circleCircumference*maxPercentage) / 100;

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{justifyContent: 'center', alignItems: 'center', padding: 12}}>
        <Svg 
          width={radius*2} 
          height={radius*2} 
          viewBox={`0 0 ${halfCircle*2} ${halfCircle*2}`}
        >
          <Circle 
            cx='50%'
            cy='50%'
            r={halfCircle}
            fill='#FFFFFF'
            // strokeWidth={strokeWidth}
          />
        </Svg>

        <Image 
          source={require('../assets/icons/facebook.png')} 
          style={
            { width: 20, height: 20, position: 'absolute', alignSelf: 'center', justifyContent: 'center', alignItems: 'center'}
          } 
        />
      </View>
    </TouchableOpacity>
  )
}