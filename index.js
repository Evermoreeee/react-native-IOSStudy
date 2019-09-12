/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import RootTabs from './App';
import App from './src/router'
import {name as appName} from './app.json';


AppRegistry.registerComponent(appName, () => App);
