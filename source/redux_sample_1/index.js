/**
 * @format
 */

import { AppRegistry } from 'react-native';
// import App from './App';
import App from './redux/pages/Counter'

import { name as appName } from './app.json';
AppRegistry.registerComponent(appName, () => App);