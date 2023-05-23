import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProfileScreen from './profile-screen';
import CreateProfileScreen from '../misc/create-profile-screen';

const ProfileStack = createNativeStackNavigator();

export default function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false }}/>
      <ProfileStack.Screen name="CreateProfileScreen" component={CreateProfileScreen} options={{ headerShown: false }}/>
    </ProfileStack.Navigator>
  );
}