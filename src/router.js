import { createSwitchNavigator ,createAppContainer} from "react-navigation";
// import Page from './page/page1'
// import DetailContainer from './page/detailContainer'
import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class HomeScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' ,backgroundColor: '#fff555'}}>
                <Text>Home Screen</Text>
                <Button
                    title="Go to Details"
                    onPress={() => {
                        this.props.navigation.dispatch(StackActions.reset({
                            index: 0,
                            actions: [
                                NavigationActions.navigate({ routeName: 'Details' })
                            ],
                        }))
                    }}
                />
            </View>
        );
    }
}
class DetailsScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' ,backgroundColor: '#fff555'}}>
                <Text>Details Screen</Text>
            </View>
        );
    }
}
const AppNavigator = createSwitchNavigator({
    HomeScreen: {
        screen: HomeScreen,
    },
    DetailsScreen: {
        screen: DetailsScreen,
    },
}, {
        initialRouteName: 'HomeScreen',
    });


const AppContainer = createAppContainer(AppNavigator);
export default class App extends Component {
    render() {
        return <AppContainer />;
    }
}