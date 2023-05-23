import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LeaderboardScreen from './leaderboard-screen';
import CreateProfileScreen from '../misc/create-profile-screen';

const LeaderboardStack = createNativeStackNavigator();

export default function LeaderboardStackScreen() {
  return (
    <LeaderboardStack.Navigator>
      <LeaderboardStack.Screen name="LeaderboardScreen" component={LeaderboardScreen} options={{ headerShown: false }}/>

      <LeaderboardStack.Screen name="CreateProfileScreen" component={CreateProfileScreen} options={{ headerShown: false }}/>
    </LeaderboardStack.Navigator>
  );
}