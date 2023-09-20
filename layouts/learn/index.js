import { useEffect } from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LearnScreen from './learn-screen';
import HtmlBasicsScreen from './htmlbasics-screen';
import HTMLOneScreen from './htmlone-screen';
import { useNavigation } from "@react-navigation/native";

const LearnStack = createNativeStackNavigator();

export default function LearnStackScreen() {
  const navigation = useNavigation()
  // useEffect(() => (
  //   navigation.setOptions({
  //     tabBarStyle: { display: 'none' },
  //   })
  // ))
  return (
    <LearnStack.Navigator>
      <LearnStack.Screen name="LearnScreen" component={LearnScreen} options={{ headerShown: false }}/>
      <LearnStack.Screen name="HtmlBasicsScreen" component={HtmlBasicsScreen} options={{ headerShown: false }}/>
      <LearnStack.Screen 
        name="HTMLOneScreen" 
        component={HTMLOneScreen} 
        options={{ 
          headerShown: false,
          tabBarStyle: { display: "none" }, 
          tabBarVisible: false,
        }}
        // options={{ tabBarStyle: { display: 'none' } }}
      />
    </LearnStack.Navigator>
  );
}