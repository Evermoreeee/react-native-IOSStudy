import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  ImageBackground,
  Button,
  Alert,
  TouchableHighlight
} from 'react-native';
import { Flex, Icon, WingBlank } from '@ant-design/react-native';
// import * as API from '../../api/index'
//引用插件
import Swiper from 'react-native-swiper';
import { Net } from '../../axios/config';

// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window');
class YcHome extends Component {

  constructor(props) {
    super(props)
    this.state = {
      yxText: '淘宝京东拼多多',
      home_data: [],
    }
  }
  componentDidMount() {
    Net.get("musicRankings").then(res => {
      if (res.data.code === 200) {
        this.setState({
          home_data: res.data.result
        })
      }
    })
      .catch(err => {
        console.log(err);
      })
  }
  hexToRgb(hex) {
    let _data = hex.split('x')
    const _color = _data[1]
    return _color ? `#${_color}` : '#333';
  }
  handleOnPress() {
    console.log('handleOnPress')
  }
  render() {
    console.log(this.state.home_data)
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.SearchContainer}>
            <Flex justify="center" align="center">
              <Icon style={styles.Icon} name="user" />
              <View style={styles.SearchBar}>
                <Flex>
                  <Icon style={styles.searchIcon} name="search" />
                  <Text >{this.state.yxText}</Text>
                </Flex>
              </View>
              <Icon style={styles.Icon} name="message" />
            </Flex>
          </View>
          <View style={{ marginTop: 80 }}>
            <Swiper style={styles.wrapper} removeClippedSubviews={false} height={width * 40 / 75} >
              {
                this.state.home_data.map((_i, _index) => {
                  return <View style={{ backgroundColor: this.hexToRgb(_i.bg_color), marginLeft: 12, marginRight: 12, borderRadius: 10, flex: 1, overflow: 'hidden' }} key={_index}>
                        <ImageBackground style={styles.ImageView} source={{ uri: _i.bg_pic }}>
                          <View style={{ marginTop: 80, marginLeft: 21 }}>
                            <Text style={{ fontSize: 32 }}>{_i.name}</Text>
                            <Text style={{ color: this.hexToRgb(_i.color), marginTop: 10 }}>{_i.comment}</Text>
                          </View>
                        </ImageBackground>
                      </View>
                })
              }
            </Swiper>
          </View>
            {
              this.state.home_data.map((_item,_index) => {
                return <View style={{ margin: 12,color:'#333'}} onPress={() => { alert('111') }} key={_index}>
                        <View style={{marginBottom:0}}>
                          <Flex>
                            <Text style={{flex:1,fontSize:18}}>{_item.name}</Text>
                            <Text style={{fontSize:12,color:'#333'}}>更多</Text>
                            <Icon style={{fontSize:12,color:'#333'}} name='right'></Icon>
                          </Flex>
                          <ScrollView horizontal style={{marginTop:10}}>
                              {
                                _item.content.map((_$i,_$index) => {
                                  return <View key={_$i.album_id} style={{marginRight:12}}>
                                            <ImageBackground style={{width:99,height:99,borderRadius:9,overflow:'hidden'}} source={{uri:_$i.pic_big}}></ImageBackground>
                                            <Text style={{width:97,marginTop:8,fontSize:10}}>{_$i.title}</Text>
                                         </View>
                                })
                              }
                          </ScrollView>
                        </View>
                    </View>
              })
            }
        </ScrollView>
      </View>
    );
  }
}
export default YcHome;

class UselessTextInputMultiline extends Component {
  static navigationOptions = {
    // title: 'page 1',
    title: '处理触摸事件',
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button style={{ flex: 1, backgroundColor: '#333' }} title={'点我!'} onPress={() => { Alert.alert("你点击了按钮!") }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff333',
  },
  
  SearchContainer: {
    position: 'absolute',
    flex: 1,
    left: 0,
    right: 0,
    height: 40,
    // width:100,
    marginTop: 40,
    // backgroundColor:333,
  },
  ImageView: {
    borderRadius: 10,
    borderColor: 'red',
    fontSize: 12,

  },
  SearchBar: {
    height: 30,
    flex: 1,
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: '#fff',
    justifyContent: 'center',
    borderRadius: 30,
  },
  searchIcon: {
    marginLeft: 12,
    marginRight: 12,
    color: '#333'
  },
  Icon: {
    // backgroundColor:'red'
    marginLeft: 15,
    marginRight: 15,
    color: '#333',

  },
  tabsBar: {
    flex: 1,
    backgroundColor: 'red'
  },
  instructions: {
    textAlign: 'center',
    color: '#333',
  },
});