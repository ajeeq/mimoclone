// import React, {useState, useEffect, useRef} from 'react';
// import {
//   View,
//   Text,
//   Image,
//   StyleSheet,
//   ScrollView,
//   TextInput,
//   TouchableOpacity,
//   Dimensions,
//   FlatList,
// } from 'react-native';
// import { useSafeAreaInsets } from 'react-native-safe-area-context';
// import { AppLoading } from 'expo'
// import { useQuery } from '@apollo/client';

// import { GET_ALL_POSTS } from '../../api/graphql';

// export default function GraphqlScreen({navigation}) {
//   const { loading, error, data } = useQuery(GET_ALL_POSTS, {
//     "options": {
//       "paginate": {
//         "page": 1,
//         "limit": 5
//       }
//     }
//   });

//   if (loading) return <AppLoading />;
//   if (error) return <Text>Error : {error.message}</Text>;
//   const insets = useSafeAreaInsets();

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F6F7FB' }}>

//     <FlatList
//       data={data.posts}
//       renderItem={({ item }) => (
//         <Text>{item.id}</Text>
//       )}
//       keyExtractor={(post) => post.id.toString()}
//     />
//     </View>
//   );
// }