import React, { Component } from 'react'
import { StyleSheet, Alert, Text, View, TouchableHighlight, TouchableNativeFeedback, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'

export default class TestTouchableViews extends Component {
    _onPressBtn() {
        // Alert.alert("Alert");
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight style={[styles.btn, {flex:1, backgroundColor: 'red'}]} onPress={this._onPressBtn}>
                    <Text style={styles.btnText}> Highlight </Text>
                </TouchableHighlight>

                <View style={{flex:1, backgroundColor:'#ff00ff', justifyContent:'center', alignItems: "center",}}>
                    <TouchableNativeFeedback  onPress={this._onPressBtn}>
                        <Text style={styles.btnText}> Feedback </Text>
                    </TouchableNativeFeedback>
                </View>

                <TouchableOpacity style={{flex:1, backgroundColor: '#5DCA5C', justifyContent:'center', alignItems: "center"}} onPress={this._onPressBtn}>
                    <Text style={styles.btnText}> Opatity </Text>
                </TouchableOpacity>

                {/* <TouchableWithoutFeedback onPress={this._onPressBtn}>
                    <View style={[styles.btn, {flex:4}]}>
                        <Text style={styles.btnText}> WithoutFeedback </Text>
                    </View>
                </TouchableWithoutFeedback> */}
            </View >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    // btn: {
    //     // flex: 2,
    //     // width: 200,
    //     justifyContent:'center',
    //     // minHeight: 100,
    //     height: 100,
    //     alignItems: "center",
    //     textAlign: 'center',
    //     marginBottom: 10,
    //     // backgroundColor: '#5ACA5C',
    // },

    //  TODO:居中显示文字
    btnText: {
        color: 'black'
    },
    btn: {
        justifyContent:'center', 
        alignItems: "center",
    }
})