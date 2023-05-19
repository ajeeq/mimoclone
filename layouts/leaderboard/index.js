import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LeaderboardScreen from './leaderboard-screen';

const LeaderboardStack = createNativeStackNavigator();

export default function LeaderboardStackScreen() {
  return (
    <LeaderboardStack.Navigator>
      <LeaderboardStack.Screen name="LeaderboardScreen" component={LeaderboardScreen} options={{ headerShown: false }}/>
    </LeaderboardStack.Navigator>
  );
}