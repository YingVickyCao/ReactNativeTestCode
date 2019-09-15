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
  