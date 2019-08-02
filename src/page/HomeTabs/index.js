import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Flex,Tabs } from '@ant-design/react-native';

class HomeTabs extends Component {
    render(){
        const tabs = [
            { title: '推荐' ,icon:'🍎'},
            { title: '专题' ,icon:'✈️'},
            { title: '连载' ,icon:'🐍'},
          ];
        const renderTabBar = () => {
            return(
                <View  style={styles.renderTabBar}>
                    <Flex justify="center" align="center" style={{height:50}}>
                    {
                        tabs.map( (tab,index) => {
                            return(
                                <Flex.Item key={index}>
                                        <Text style={{textAlign:'center'}}>{tab.title}</Text>
                                </Flex.Item>
                            )
                        })
                    }
                    </Flex>
                </View>
            )
        }
        return(
            <View style={styles.tabsBar}>
                <Tabs 
                    tabBarBackgroundColor='#fff333'
                    // renderTabBar={renderTabBar}
                    // renderTab={tab => 
                    //             <View  style={styles.renderTab}>
                    //              <Text>{tab.title}</Text>
                    //             </View>
                    //           }
                    tabBarActiveTextColor='#ea6f5a'
                    tabBarUnderlineStyle={styles.outline} 
                    tabs={tabs}>
                    <View style={styles.tabstyle}>
                        <Text style={{color:'red'}}>✨星星在闪耀</Text>
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
        backgroundColor:'#fff333'
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
        alignItems: 'center',
        justifyContent: 'center',
        height: 150,
        backgroundColor:'#333',
    },
    topTabItem:{
        width:50,
        paddingTop:5,
        paddingBottom:10,
        // backgroundColor:'red'
    },
    outline:{
        width: 36,
        backgroundColor:'#ea6f5a',
        marginLeft:45,
    }
  });