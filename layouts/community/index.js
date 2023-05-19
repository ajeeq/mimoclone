import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CommunityScreen from './community-screen';

const CommunityStack = createNativeStackNavigator();


export default function CommunityStackScreen() {
  return (
    <CommunityStack.Navigator>
      <CommunityStack.Screen name="CommunityScreen" component={CommunityScreen} options={{ headerShown: false }}/>
    </CommunityStack.Navigator>
  );
}