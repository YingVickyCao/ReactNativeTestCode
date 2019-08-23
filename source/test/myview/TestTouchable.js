import React, { Component } from 'react'
import { StyleSheet, Alert, Text, View, TouchableHighlight, TouchableNativeFeedback, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'

export default class TestTouchableViews extends Component {
    _onPressBtn() {
        // Alert.alert("Alert");
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight style={styles.btn} onPress={this._onPressBtn} underlayColor='#EB984E'>
                    <Text style={styles.btnText}> Highlight </Text>
                </TouchableHighlight>

                
                {/* <TouchableNativeFeedback onPress={this._onPressBtn} background={TouchableNativeFeedback.SelectableBackgroundBorderless()}> */}
                <TouchableNativeFeedback onPress={this._onPressBtn} background={TouchableNativeFeedback.SelectableBackground()}>
                    <View style={[styles.btn, { backgroundColor: 'red' }]}>
                        <Text> Feedback </Text>
                    </View>
                </TouchableNativeFeedback>

                <TouchableOpacity style={styles.btn} onPress={this._onPressBtn}>
                    <Text style={styles.btnText}> Opatity </Text>
                </TouchableOpacity>

                <TouchableWithoutFeedback style={styles.btn} onPress={this._onPressBtn}>
                    <View style={[styles.btn, { backgroundColor: 'red' }]}>
                        <Text style={styles.btnText}> Feedback </Text>
                    </View>
                </TouchableWithoutFeedback>
            </View >
        )
    }
}

/**
 * TouchableNativeFeedback: Android only
 * TouchableWithoutFeedback: Depressed
 */
const styles = StyleSheet.create({
    container: {
        // flex: 1, // 居中，因为height = match_parent
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: "center",
        width: '100%',
        backgroundColor: '#D5DBDB',
    },
    btn: {
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: '#5DCA5C',
        width: 200,
        height: 100,
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: '#5DCA5C',
        marginBottom: 10,
        width: '50%',
    },
    btnText: {
        color: 'black'
    },

})