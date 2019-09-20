import { createSwitchNavigator ,createAppContainer,StackActions, NavigationActions} from "react-navigation";
import React, { Component } from 'react';
// import StackViewStyleInterpolator from 'react-navigation-stack/src/views/StackView/StackViewStyleInterpolator';
import BasicTabBarExample from './page/home'
import DetailContainer from './page/detailContainer'
import ImageDetail from './page/detailContainer/ImageDetail'

import { createStackNavigator } from 'react-navigation-stack';


const AppRouter= createStackNavigator({
    Home: {
        screen: BasicTabBarExample,
        navigationOptions:{
            header:null
        }
    },
    Details: {
        screen:DetailContainer,
    },
    ImageDetail:{
        screen :ImageDetail,
    }
}, {
        initialRouteName: 'Home',
        mode: "card",
        headerMode:'screen'
    });


const AppContainer = createAppContainer(AppRouter);
export default AppContainer;
