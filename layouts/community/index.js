import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CommunityScreen from './community-screen';
import CreateProfileScreen from '../auth/create-profile-screen';
import GraphqlScreen from './graphql-screen';

const CommunityStack = createNativeStackNavigator();


export default function CommunityStackScreen() {
  return (
    <CommunityStack.Navigator>
      <CommunityStack.Screen name="CommunityScreen" component={CommunityScreen} options={{ headerShown: false }}/>

      <CommunityStack.Screen name="CreateProfileScreen" component={CreateProfileScreen} options={{ headerShown: false }}/>
      <CommunityStack.Screen name="GraphqlScreen" component={GraphqlScreen} options={{ headerShown: false }}/>
    </CommunityStack.Navigator>
  );
}