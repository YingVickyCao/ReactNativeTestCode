// import React, { Component } from 'react';
// import { View, Text, AppRegistry, StyleSheet, Dimension, PixelRatio, Button } from 'react-native';

// const px = PixelRatio.get();
// const { height, width } = Dimension.get('window');

// export default class TestWindowComponent extends Component {
//     render() {
//         return (
//             <View style={styles.container}>
//                 {/* <Text style={styles.text}>1逻辑像素={px} 实际像素</Text>
//                 <Text style={styles.text}>手机屏幕 高={height}逻辑像素 </Text>
//                 <Text style={styles.text}>手机屏幕 宽{width}逻辑像素</Text> */}
//             </View>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         paddingTop: 22,
//         backgroundColor: "#f7f9fa",
//     },
//     text: {
//         padding: 10,
//         height: 45,
//         backgroundColor: "#52BE80",
//         marginBottom: 1
//     }
// });


import React, { Component } from 'react'
import { Text, View, NativeModules,StyleSheet } from 'react-native'
import { buildDate } from '../communication_between_components/DateInfo'

export default class TostComponent extends Component {
    constructor(props) {
        super(props);
        this._onPressToShowNativeToast = this._onPressToShowNativeToast.bind(this);
    }

    render() {
        return (
            <View style={styles.container}>

                <Text style={styles.btn} onPress={this._onPressToShowNativeToast}>Click to show native Toast</Text>
            </View>);
    }

    _onPressToShowNativeToast() {
        NativeModules.NativeToast.show(buildDate());
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    }
    ,
    btn: {
      backgroundColor: 'red',
      width:'80%',
      height:100,
      fontSize:16,
      textAlign:'center',
      textAlignVertical:'center'
    },
  });
  