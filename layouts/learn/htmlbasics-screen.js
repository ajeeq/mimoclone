import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from 'react-native';

import TopBarHandler from '../../components/top-bar-handler';
import Donut from '../../components/donut';
import Card from '../../components/card';
import { TopBarComponentRight } from '../../components/top-bar-components';

// import styles from '../../styles/App.scss';

export default function HtmlBasicsScreen({navigation}) {

  const GoBack = () => {
    return (
      <TouchableOpacity
        style={{ marginHorizontal: 4 }}
        onPress={() => navigation.goBack()}
      >
        <Image
          source={require('../../assets/icons/round_arrow_back_black_48dp_2x.png')}
          style={{
            width: 28,
            height: 28,
            tintColor: '#FFFFFF',
          }}
        />
      </TouchableOpacity>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#F6F7FB', flexDirection: 'column' }}>
      <View style={{ height: 32, top: 0, left: 0, right: 0, marginTop: Platform.OS === 'ios' ? 28 : 38, justifyContent: 'center' }}>
        <TopBarHandler bgColor='#333661' leftComponent={GoBack} rightComponent={TopBarComponentRight}/>
      </View>

      <View style={styles.row}>
        <View style={{ flex: 4, paddingVertical: 14 }}>
          <Text style={styles.title}>HTML Basics</Text>
          <Text style={styles.description}>
            Create webpages using HTML tags
          </Text>
        </View>

        <View style={{ flex: 1 }}>
          <Donut radius={40} strokeWidth={7}/>
        </View>
      </View>

      <View style={{ flexDirection: 'row', marginHorizontal: 10, alignItems: 'center', }}>
        <Image
          source={require('../../assets/icons/round_school_black_48dp_2x.png')}
          style={{ width: 28, height: 28, tintColor: '#7F4BDE' }}
        />
        <Text style={{ marginHorizontal: 8, color: '#242746', fontSize: 20, fontWeight: 900 }}>Learn</Text>
      </View>

      <View style={{ flex: 1, flexWrap: 'wrap', flexDirection: 'row', alignItems: 'center', }}>
        <Card 
          title="Discovering HTML and Tags"
          backgroundColor={'#FFFFFF'} color={'#242746'}
          tintColor={'#E34F26'}
          onPress={() => navigation.navigate('HTMLOneScreen')}
        />  
        <Card 
          title="Structuring Text and Tags" 
          backgroundColor={'#E4E6F2'}
          textColor={'#B4B5C7'}
          tintColor={'#B4B5C7'}
        />
        <Card 
          title="Building Buttons" 
          backgroundColor={'#E4E6F2'} 
          textColor={'#B4B5C7'}
          tintColor={'#B4B5C7'}
        />
        <Card 
          title="Creating Links" 
          backgroundColor={'#E4E6F2'} 
          textColor={'#B4B5C7'}
          tintColor={'#B4B5C7'}
        />
        <Card 
          title="Adding Images" 
          backgroundColor={'#E4E6F2'} 
          textColor={'#B4B5C7'}
          tintColor={'#B4B5C7'}
        />
      </View>

      {/* <FlatList
        data={gridData}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
        numColumns={2}
      /> */}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  row: {
    flexDirection: 'row',
    paddingHorizontal: 14,
    // justifyContent: 'space-between',
    // borderBottomWidth: 1,
    // borderBottomColor: '#CCCCCC',
    // paddingBottom: 20,
    // backgroundColor: 'red'
  },
  column: {

  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#242746'
  },
  description: {
    fontSize: 18,
    color: '#4A4C84',
  },

  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  titles: {
    fontSize: 24,
  },
});