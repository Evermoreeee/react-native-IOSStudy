import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View, Button,
    Animated,
    Modal,
    Image,
    Easing,
    TouchableOpacity
} from 'react-native';
import { Flex, Icon } from '@ant-design/react-native';

export default class DetailContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fadeAnim: new Animated.Value(15),  //设置初始值
            modal: false,
        }
    }
    _IconListRender(list) {
        console.log(list)
        if (!!list && list.constructor == Array) {
            const __render = list.map((item, index) => {
                return <View key={index} style={styles.IconList}>
                    <Text>
                        {item}
                    </Text>
                </View>
            })
            return __render
        } else {
            return <View style={styles.IconList}></View> //占位
        }
    }
    render() {
        console.log(this.props.navigation)
        const { navigate } = this.props.navigation;
        const { Detail } = this.props.navigation.state.params;

        const IconList = Detail.biaoshi.split(',')
        return (
            <View style={{ flex: 1 ,backgroundColor:'#ff99cc'}}>
                <Text style={styles.topTitle}>你是叫布兰妮吗</Text>
                <Button title='返回' onPress={() => {
                    navigate('Home')
                }}></Button>
                <View style={{ marginLeft: 12,backgroundColor:'#ff99cc' }}>
                    <Image style={{ width: 120, height: 120, borderRadius: 60, marginBottom: 24 }} source={{ uri: Detail.pic_big }}></Image>

                    <Animated.Text style={[styles.AnimaTetx, { fontSize: this.state.fadeAnim }]}>
                        专辑 : {Detail.title}
                    </Animated.Text>
                    <Animated.Text style={{ fontSize: this.state.fadeAnim }}>
                        歌手 : {Detail.author}
                    </Animated.Text>
                    <Flex>
                        {
                            this._IconListRender(IconList)
                        }
                    </Flex>
                </View>


                <Button title='显示modal列表' onPress={() => this.setState({
                    modal: !this.state.modal
                })} />

                <Modal
                    animationType={'slide'}
                    transparent={true}
                    onRequestClose={() => console.log('onRequestClose...')}
                    visible={this.state.modal}
                >
                    <TouchableOpacity
                        onPress={() => this.setState({
                            modal: false
                        })}
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                        <View style={{
                            position: 'absolute',
                            bottom: 0,
                            width: 500,
                            backgroundColor: 'grey',
                            alignItems: 'center'
                        }}>
                            <Text style={{ height: 50 }}>Hide Modal</Text>
                            <Text style={{ height: 50 }}>Hide Modal</Text>
                            <Text style={{ height: 50 }}>Hide Modal</Text>
                            <Text style={{ height: 50 }}>Hide Modal</Text>
                            <Text style={{ height: 50 }}>Hide Modal</Text>
                            <Text style={{ height: 50 }}>Hide Modal</Text>

                        </View>
                    </TouchableOpacity>

                </Modal>

            </View>
        )
    }
    componentDidMount() {

        Animated.timing(
            this.state.fadeAnim,  //初始值
            {
                toValue: 22,            //结束值
                duration: 2000,        //动画时间
                easing: Easing.linear,
            },
        ).start();               //开始
    }
}
const styles = StyleSheet.create({
    topTitle: {
        paddingTop: 40,
        paddingBottom: 6,
        justifyContent: "center",
        backgroundColor: "#fff333",
        fontSize: 18,
        textAlign: "center"
    },
    AnimaTetx: {
        color: 'red',
        marginBottom: 3
    },
    IconList: {
        fontSize: 12,
        color: '#333',
        marginRight: 6,
        marginTop:12,
        padding:2,
        borderRadius:8,
        backgroundColor:'red'
    }
})