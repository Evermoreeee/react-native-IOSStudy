import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Flex,Tabs ,InputItem} from '@ant-design/react-native';
import CenterList from './centerList'
class HomeTabs extends Component {
    render(){
        const tabs = [
            { title: '推荐' ,icon:'🍎'},
            { title: '专题' ,icon:'✈️'},
            { title: '连载' ,icon:'🐍'},
          ];
        return(
            <View style={styles.tabsBar}>
                <Tabs 
                    tabBarBackgroundColor='#333'
                    tabBarActiveTextColor='#ea6f5a'
                    tabBarInactiveTextColor='#fff'
                    tabBarUnderlineStyle={styles.outline} 
                    tabs={tabs}>
                    <View style={styles.tabstyle}>
                        <CenterList></CenterList>
                    </View>
                    <View style={styles.tabstyle}>
                        <Text>Content of Second Tab</Text>
                    </View>
                    <View style={styles.tabstyle}>
                        <Text>Content of Third Tab</Text>
                    </View>
                </Tabs>
            </View>
        );
    }
}
export default HomeTabs;
const styles = StyleSheet.create({
    tabsBar:{
        flex:1,
        backgroundColor:'#333'
    },
    renderTabBar:{
        width: 150,
        height:50,
        backgroundColor:'#fff333',
        color:'red',
    },
    
    renderTab:{
        flex:1,
        color:'#fff',
        width:60,
        margin:0,
        padding:0,
        backgroundColor:'red',
        margin:0,
    },
    tabstyle:{
        flex:1,
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor:'#00cc00',
    },
    topTabItem:{
        width:50,
        paddingTop:5,
        paddingBottom:10,
        // backgroundColor:'red'
    },
    outline:{
        width: 36,
        height: 2,
        backgroundColor:'#ea6f5a',
        marginLeft:45,
    }
  });