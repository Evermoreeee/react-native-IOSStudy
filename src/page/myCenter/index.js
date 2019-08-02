import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import HomeTabs from '../HomeTabs'
 class MyCenter extends  Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.SearchBar} >
                    <Text style={styles.instructions}>✨搜索感兴趣的内容</Text>
                </View>
                <HomeTabs></HomeTabs>
            </View>
        );

    }
}
export default MyCenter ;
const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#fff333',
    },
    SearchBar:{
        margin:20,
        height:30,
        marginTop:40,
        marginBottom:10,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:30,
    },
    tabsBar:{
        flex:1,
        backgroundColor:'red'
    },
    instructions: {
      textAlign: 'center',
      color: '#333',
    },
  });