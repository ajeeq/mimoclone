import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Screens Stacks
import LearnStackScreen from './layouts/learn';
import LeaderboardStackScreen from './layouts/leaderboard';
import CommunityStackScreen from './layouts/community';
import ProfileStackScreen from './layouts/profile';

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              // let IconComponent;
              // let iconProps = {};
              let src;

              if (route.name === 'Learn') {
                src = focused
                ? require('./assets/icons/round_school_black_48dp_2x.png')
                : require('./assets/icons/outline_school_black_48dp_2x.png')
              } else if (route.name === 'Leaderboard') {
                src = focused
                ? require('./assets/icons/round_emoji_events_black_48dp_2x.png')
                : require('./assets/icons/outline_emoji_events_black_48dp_2x.png')
              } else if (route.name === 'Community') {
                src = focused
                ? require('./assets/icons/round_forum_black_48dp_2x.png')
                : require('./assets/icons/outline_forum_black_48dp_2x.png')
              } else if (route.name === 'Profile') {
                src = focused
                ? require('./assets/icons/round_person_black_48dp_2x.png')
                : require('./assets/icons/outline_person_black_48dp_2x.png')
              }

              return <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image 
                  source={src}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? '#242746' : '#748C94'
                  }}
                />
                <Text style={{color: focused ? '#242746' : '#748C94', fontSize: 12 }}>
                  {route.name}
                </Text>
              </View>;
            },
            headerShown: false,
            tabBarShowLabel: false,
          })}
          >
            <Tab.Screen name="Learn" component={LearnStackScreen} />
            <Tab.Screen name="Leaderboard" component={LeaderboardStackScreen} />
            <Tab.Screen name="Community" component={CommunityStackScreen} />
            <Tab.Screen name="Profile" component={ProfileStackScreen} />
          </Tab.Navigator>
        </NavigationContainer>

        {/* <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
          <StatusBar style="auto" />
        </View> */}

      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
