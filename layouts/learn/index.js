import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LearnScreen from './learn-screen';
import HtmlBasicsScreen from './htmlbasics-screen';
import HTMLOneScreen from './htmlone-screen';

const LearnStack = createNativeStackNavigator();

export default function LearnStackScreen() {
  return (
    <LearnStack.Navigator>
      <LearnStack.Screen name="LearnScreen" component={LearnScreen} options={{ headerShown: false }}/>
      <LearnStack.Screen name="HtmlBasicsScreen" component={HtmlBasicsScreen} options={{ headerShown: false }}/>
      <LearnStack.Screen name="HTMLOneScreen" component={HTMLOneScreen} />
    </LearnStack.Navigator>
  );
}