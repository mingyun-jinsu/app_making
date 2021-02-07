import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.tapbar}>
        <Text style={styles.text}>커리큘럼 앱</Text>
      </View>

      <View style={styles.content}>

        <View style={styles.box}>
          <View style={styles.choosing}>
            <View><Text>O 필수교양  </Text></View>
            <View><Text>O 일반교양  </Text></View>
            <View><Text>O 전공필수  </Text></View>
            <View><Text>O 전공선택좌</Text></View>
          </View>
        </View>

        <View style={styles.gradebar}>
         <Text style={styles.text}>1학년</Text>
        </View>

        <View style={styles.gradebar}>
          <Text style={styles.text}>2학년</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box:{
    flexDirection:'row',
    height:30,
    marginTop:10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  choosing:{
    flexDirection:'row',
    borderColor:'#000',
    borderWidth:1,
    borderRadius:20,
    width:350,
    height:30,
    
    justifyContent: 'center',
    alignItems: 'center',
  },
  text:{
  },
  tapbar:{
    flex: 1,
    backgroundColor: '#FFD498',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradebar:{
    //flex: 1,
    paddingTop:20,
    flexDirection:'row',
    borderColor:'#000',
    borderWidth:0.5,
    height:60,
    marginTop:20,
  },
  container: {
    flex: 1,
    //backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  content:{
    flex:8,
    backgroundColor: '#fff',
  }
});