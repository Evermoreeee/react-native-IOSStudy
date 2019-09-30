/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import RootTabs from './App';
import App from './src/router'
import {name as appName} from './app.json';

import React, {Component} from 'react';
import {Provider} from 'mobx-react'
import AppStore from './src/mobx/appStore'

class StoreApp extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <Provider store={AppStore}>
                <App></App>
            </Provider>
        )
    }
}
 
AppRegistry.registerComponent(appName, () => StoreApp);
