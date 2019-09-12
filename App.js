/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
// import RootNavigator from './src/router'
import BasicTabBarExample from './src/page/home'
// import RootNavigator from './src/router'
// import {
//   StackNavigator,
// } from 'react-navigation';

// import Page from './src/page/page1'
// import DetailContainer from './src/page/detailContainer'

GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// const RootNavigator = StackNavigator({
//   page1: {
//       screen: Page
//   },
//   Detail: {
//       screen: DetailContainer
//   }
// },
//   {//定义配置
//       initialRouteName: 'DetailContainer',     //设置初始路由为Home
// })
// export default App;
export default class App extends Component{
  render() {
    return (
      // <RootNavigator></RootNavigator>
      <View style={styles.container}>
         <BasicTabBarExample></BasicTabBarExample>
      </View> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff555',
    flexDirection: 'row',
    flexWrap: 'wrap',
    color:'red'
  },
  
});
