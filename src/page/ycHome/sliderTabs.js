import React, {Component} from 'react';
import {
    Text,
    View,
    ScrollView,
    ImageBackground,
    TouchableOpacity
  } from 'react-native';
import { Flex, Icon } from '@ant-design/react-native';

export default class UselessTabSlider extends Component {
    render() {
      const {_item,navigate} = this.props
      // console.log(_item)
      return (
        <View style={{ paddingLeft:6,paddingRight:6, color: '#fff',backgroundColor:'#333' }} onPress={() => { alert('111') }} >
        <View style={{ marginBottom: 0 }}>
          <Flex>
            <Text style={{ flex: 1, fontSize: 18 ,color:'#fff'}}>{_item.name}</Text>
            <Text style={{ fontSize: 12, color: '#fff' }}>更多</Text>
            <Icon style={{ fontSize: 12, color: '#fff' }} name='right'></Icon>
          </Flex>
          <ScrollView horizontal style={{ marginTop: 10 }}>
            {
              _item.content.map((_$i, _$index) => {
                return <TouchableOpacity  key={_$i.album_id} onPress={() => {
                  navigate('Details',{Detail:_$i})
                }}>
                <View  style={{ marginRight: 12 }}>
                  <ImageBackground style={{ width: 99, height: 99, borderRadius: 9, overflow: 'hidden' }} source={{ uri: _$i.pic_big }}></ImageBackground>
                  <Text style={{ width: 97, marginTop: 8, fontSize: 10,color:'#fff' }}>{_$i.title}</Text>
                </View>
                </TouchableOpacity>
              })
            }
          </ScrollView>
        </View>
      </View>
      );
    }
  }
  