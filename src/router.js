import { createSwitchNavigator ,createAppContainer,StackActions, NavigationActions} from "react-navigation";
import React, { Component } from 'react';
// import StackViewStyleInterpolator from 'react-navigation-stack/src/views/StackView/StackViewStyleInterpolator';
import BasicTabBarExample from './page/home'
import DetailContainer from './page/detailContainer'


const AppNavigator = createSwitchNavigator({
    Home: {
        screen: BasicTabBarExample,
    },
    Details: {
        screen: DetailContainer,
    },
}, {
        initialRouteName: 'Home',
        mode: 'modal',
        // transitionConfig:() => ({
        //     screenInterpolator: StackViewStyleInterpolator.forHorizontal,
        // })
    });


const AppContainer = createAppContainer(AppNavigator);
export default class App extends Component {
    render() {
        return <AppContainer />;
    }
}