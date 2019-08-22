/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
// import App from './myview/TestStyle';
// import App from './myview/TestProps';
// import App from './myview/CustomView';
// import App from './myview/TestStateView';
// import App from './myview/TestHeightWidth';
// import App from './myview/TestTextInput';
// import App from './myview/TestFlex';
// import App from './myview/TestFlexDirection';
// import App from './myview/TestJustifyContent';
// import App from './myview/TestAlignItems';
// import App from './myview/TestAlignSelf';

// import App from './communication_between_components/parent_2_child/ParentView';
// import App from './communication_between_components/child_2_parent/ParentView';
// import App from './network/TestImage'

import App from './network/async/Movies'
// import App from './myview/TestList'
// import App from './myview/TestSectionList'

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);