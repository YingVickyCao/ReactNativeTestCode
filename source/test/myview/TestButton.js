import React, { Component } from 'react'
import { Button, View, StyleSheet, Alert } from 'react-native'

export default class UseButton extends Component {
    _onPressBtn() {
        Alert.alert('Button clicked.');
    }
    render() {
        return (
            <View style={styles.container}>
                <Button style={styles.btn} title="Alert" color='#22EE25' onPress={this._onPressBtn}></Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems:'center',
        flex:1,
        backgroundColor: '#EEB4AD', 
    }
    ,
    btn: {
        // backgroundColor: '#52BE80', 
        width:200,
        //  minWidth无效
        minWidth:200,
    }
})