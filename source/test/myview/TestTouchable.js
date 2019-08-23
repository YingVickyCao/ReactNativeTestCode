import React, { Component } from 'react'
import { StyleSheet, Alert, Text, View, TouchableHighlight, TouchableNativeFeedback, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'

export default class TestTouchableViews extends Component {
    _onPressBtn() {
        // Alert.alert("Alert");
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight onPress={this._onPressBtn}>
                    <View style={styles.btn}>
                        <Text style={styles.btnText}> Highlight </Text>
                    </View>
                </TouchableHighlight>

                <TouchableNativeFeedback onPress={this._onPressBtn}>
                    <View style={styles.btn}>
                        <Text style={styles.btnText}> Feedback </Text>
                    </View>
                </TouchableNativeFeedback>

                <TouchableOpacity style={this._onPressBtn}>
                    <View style={styles.btn}>
                        <Text style={styles.btnText}> Opatity </Text>
                    </View>
                </TouchableOpacity>

                <TouchableWithoutFeedback onPress={this._onPressBtn}>
                    <View style={styles.btn}>
                        <Text style={styles.btnText}> WithoutFeedback </Text>
                    </View>
                </TouchableWithoutFeedback>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
    },
    btn: {
        flex: 0,
        minWidth: 200,
        minHeight: 100,
        alignItems: "center",
        textAlign: 'center',
        marginBottom: 10,
        backgroundColor: '#5ACA5C',
    },

    //  TODO:居中显示文字
    btnText: {
        textAlign: "center",
        color: '#000',
    }
})