import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Flex, Tabs, InputItem } from '@ant-design/react-native';
import { Net } from '../../axios/config';
import axios from 'axios';


class CenterList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data_list: [],
            page: 1
        }
    }
    async _getSatinGodApi() {
        const query = {
            type: 1,
            page: this.state.page
        }
        const res = await axios.get('https://www.apiopen.top/satinGodApi?type=1&page=1').then(res => res.data)
        // console.log(res)
        if (res.code === 200) {
            this.setState({
                data_list: this._FlitersStainGod(res.data)
            })
        }

    }
    _FlitersStainGod(data) {
        let _fliter_data = []
        let key = []
        data.forEach(item => {
            const itemKey = item.type
            const _index = key.indexOf(itemKey)
            if (_index == -1) {
                key.push(itemKey)
                _fliter_data.push(
                    {
                        name: itemKey,
                        children: [item]
                    }
                )
            } else {
                _fliter_data[_index].children.push(item)
            }
        });
        // console.log(_fliter_data)
        return _fliter_data
    }
    componentDidMount() {
        this._getSatinGodApi()
    }
    render() {
        return (
            <View style={styles.CenterCom}>
                <ScrollView>
                    {
                        this.state.data_list.map((item, index) => {
                            if (item.name == 'image') {
                                return <View key={index}>
                                    <Text style={{margin:12,marginBottom:6,fontSize:18,color:'#ff6600',fontWeight:'400'}}>V图片专栏ToT</Text>
                                    <ImageNode  options={item}></ImageNode>
                                </View>
                            }
                        })
                    }
                </ScrollView>
            </View>
        );
    }
}

class ImageNode extends Component {
    render() {
        const { children } = this.props.options
        console.log(children)
        return (
            <View>
                {
                    children.map((item, index) => {
                        return <View style={styles.CardCom} key={index}>
                            <Flex>
                                <Image style={{ width: 70, height: 70, margin: 8 }} source={{ uri: item.header }}></Image>
                                <View style={{flex:1}}>
                                    <Text numberOfLines={2} style={{marginTop:2}}>{item.text}</Text>
                                    <Text style={{marginTop:2,color:'#fff333'}}>
                                        作者:{item.username}
                                    </Text>
                                    <Text style={{marginTop:2,color:'#fff333'}}>
                                        时间:{item.passtime}
                                    </Text>
                                    <View style={{marginTop:2,color:'#fff333'}}>
                                        <Flex>
                                            <Text style={[styles.Icon,{backgroundColor:'#ff6600'}]}>{item.comment}</Text>
                                            <Text style={[styles.Icon,{backgroundColor:'#ff66ff'}]}>{item.down}</Text>
                                            <Text style={[styles.Icon,{backgroundColor:'#33ccff'}]}>{item.forward}</Text>
                                            <Text style={[styles.Icon,{backgroundColor:'#00cc00'}]}>{item.up}</Text>
                                        </Flex>
                                    </View>
                                </View>
                            </Flex>
                        </View>
                    })
                }
            </View>
        )
    }
}

export default CenterList;
const styles = StyleSheet.create({
    CenterCom: {
        flex: 1,
        backgroundColor: '#fff'
    },
    CardCom: {
        margin: 12,
        marginTop: 6,
        backgroundColor: '#b3d9ff',
        borderRadius: 5
    },
    Icon:{
        padding:3,
        paddingTop:1,
        paddingBottom:1,
        backgroundColor:'#333',
        borderRadius:6,
        marginBottom:3,
        marginRight:5,
        color:'#fff'
    }
});