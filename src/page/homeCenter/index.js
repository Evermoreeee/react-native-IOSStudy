import React, {Component}  from 'react';
import { StyleSheet,Text, View } from 'react-native';
import { Flex,Icon,Tabs} from '@ant-design/react-native';
import MyCenter from '../myCenter/index'


class HomeCenter extends Component{
        constructor(props){
            super(props);
            this.state = {
                selectedTab: 0,
            };
        }
        tabhandleCheck(index){
            this.setState({
                selectedTab: index,
            })
        }
        render(){
            const TopbarData = [{title:'我的'},{title:'发现'},{title:'羊村'},{title:'视频'}]
            
            const Tabsbaby = (
                <Flex justify='center' align='center'>
                    { 
                        TopbarData.map( (tab,index) => {
                            return (
                                <Flex.Item key={index} onPress={
                                    ()=>{
                                        this.setState({
                                            selectedTab: index,
                                        })
                                    }
                                }>
                                    <Text style={[
                                        styles.topbarbaby,this.state.selectedTab===index&&styles.selectedTab
                                    ]}>{tab.title}</Text>
                                </Flex.Item>
                            )
                        }) 
                    }
                </Flex>
            )
            return(
                <View style={styles.container}>
                    
                    <Tabs 
                        page={this.props.selectedTab}
                        destroyInactiveTab='true'
                        onChange={(tab,index)=>{
                            this.setState({
                                selectedTab: index,
                            })
                        }}
                        renderTabBar={
                            props => {
                                return(
                                    <View style={styles.topNav}>
                                        <Flex  justify="start">
                                            <View style={styles.outicon}>
                                                <Icon color='#fff' name='bars' />
                                            </View>
                                            <Flex.Item >
                                                <View style={styles.topNavtabbar}>
                                                {Tabsbaby}
                                                </View>
                                            </Flex.Item>
                                            <View style={styles.outicon}>
                                                <Icon color='#fff' name='audio' />
                                            </View>
                                        </Flex>
                                    </View>
                                )
                            }
                        }
                        tabs={TopbarData}>
                        <View style={styles.tabstyle}>
                            <Text style={{color:'red'}}>星星🌟</Text>
                        </View>
                        <View style={styles.tabstyle}>
                            <Text>Content of Second Tab</Text>
                        </View>
                        <View style={styles.tabstyle}>
                            <Text>星星🌟</Text>
                        </View>
                        <View style={styles.tabstyle}>
                            <Text>Content of Third Tab</Text>
                        </View>
                    </Tabs>
                </View>
            )
        }
}
export default HomeCenter;
const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#333',
    },
    topNav:{
        backgroundColor:'red',
        paddingTop:40,
    },
    outicon:{
        width:50,
        height:40,
        justifyContent:'center',
        color:'#fff',
        // backgroundColor:'#fff555',
        alignItems:'center'
    },
    topNavtabbar:{
        paddingLeft:30,
        paddingRight:30,
        height:40,
        // backgroundColor:'#333',
        borderRadius:40,
    },
    topbarbaby:{
        color:'#333',
        fontWeight:'500',
        textAlign:'center',
        lineHeight:40
    },
    tabstyle:{
        flex:1,
        backgroundColor:'#333',
    },
    selectedTab:{
        color:'#fff333',
        // transform:scaleX(1.2)
        transform:[{scaleX:1.3}]
    }
  });