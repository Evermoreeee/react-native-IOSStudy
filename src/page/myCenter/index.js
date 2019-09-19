import React, {Component} from 'react';
import {StyleSheet, Text, View ,TextInput} from 'react-native';
import HomeTabs from './HomeTabs'
import { Flex,Tabs ,InputItem} from '@ant-design/react-native';

 class MyCenter extends  Component{
     constructor(props){
         super(props)
         this.state = {
            text:''
         }
     }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.SearchBar} >
                    <TextInput 
                        // 订阅用户输入
                        onChangeText = {(text) => this.setState({text})}
                        value = {this.state.text}
                        placeholder = {'入夜了我衣衫太薄'} 
                        style={{borderColor:'red',width:100,color:'red',textAlign:"center"}}></TextInput>
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
    textStyle: {
        margin: 20,
        alignItems: 'center',
        fontSize : 20,
        backgroundColor: '#00f7ff',
    },
    SearchBar:{
        margin:20,
        marginLeft:60,
        marginRight:60,
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