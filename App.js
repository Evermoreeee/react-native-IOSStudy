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
import {Provider} from 'mobx-react'
import AppStore from './src/mobx/appStore'


GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component{
  render() {
    return (
      <Provider store={AppStore}>
        <View style={styles.container}>
          <BasicTabBarExample></BasicTabBarExample>
        </View> 
      </Provider>
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
