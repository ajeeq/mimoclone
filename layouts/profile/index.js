import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProfileScreen from './profile-screen';

const ProfileStack = createNativeStackNavigator();

export default function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false }}/>
    </ProfileStack.Navigator>
  );
}