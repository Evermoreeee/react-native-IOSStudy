import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import { Flex, Icon } from '@ant-design/react-native';

const { width, height } = Dimensions.get('window');

export default class ImageDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            myHeight: 0,
        }
        const { ImageOption } = this.props.navigation.state.params
        Image.getSize(ImageOption.thumbnail, (_width, _height) => {
            let myHeight = Math.floor(width / _width * _height);
            this.setState({
                myHeight: myHeight
            })
        });

    }
    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.ImageOption.top_commentsContent,
        headerStyle: {
            backgroundColor: '#fff555'
        },
        headerTintColor: '#333',
        headerBackTitle: null

    });
    componentDidMount() {

    }
    render() {
        const { params } = this.props.navigation.state
        // console.log(params.ImageOption.thumbnail)
        return (
            <View style={{ flex: 1, backgroundColor: '#fff333' }}>
                <ScrollView >
                    <Text style={{ fontSize: 16, color: "#333", padding: 12, backgroundColor: '#66ffb3' }}>{params.ImageOption.text}</Text>
                    <View style={{ flex: 1, }}>
                        <Image
                            style={{ width: width, height: this.state.myHeight, backgroundColor: '#66ff66', }}
                            source={{ uri: params.ImageOption.thumbnail }}>
                        </Image>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({

})