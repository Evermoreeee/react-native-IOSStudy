import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class Page extends Component {
    static navigationOptions = {
        title: 'page1',
    }
    constructor(props){
        super(props)
        this.state = {
        }
    }
    render(h){
        render(
            <View>
                <Text >我是page1</Text>
            </View>
        )
    }
}