/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict'
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  ImageBackground,
} from 'react-native';
import UselessTabSlider from './sliderTabs'
import { Flex, Icon } from '@ant-design/react-native';
// import * as API from '../../api/index'
//引用插件
import Swiper from 'react-native-swiper';
import { Net } from '../../axios/config';

// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window');
export default class YcHome extends Component {

  constructor(props) {
    super(props)
    this.state = {
      yxText: '淘宝京东拼多多',
      home_data: [],
    }
  }
  async _getMusicRankings() {
    const res = await Net.get('musicRankings').then(res => res.data)
    console.log(res)
    if (res.code === 200) {
      this.setState({
        home_data: res.result
      })
    }
  }
  componentDidMount() {
    this._getMusicRankings()
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
    // console.log(this.state.home_data)
    const {navigate} = this.props
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
          
          <View style={{ marginTop: 75 ,backgroundColor:'#333',paddingTop:5,paddingBottom:5}}>
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
            this.state.home_data.map((_item, _index) => {
              
                return <UselessTabSlider _item={_item} navigate={navigate} key={_index}></UselessTabSlider>
               
            })
          }
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffcc99',
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