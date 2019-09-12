import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class DetailContainer extends Component {
    static navigationOptions = {
        title: 'Detail',
    }
    constructor(props){
        super(props)
        this.state = {
        }
    }
    render(h){
        render(
            <View>
                <Text >我是详情</Text>
            </View>
        )
    }
}