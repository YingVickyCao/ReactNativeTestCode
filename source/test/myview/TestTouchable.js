import React, { Component } from 'react'
import { StyleSheet, Alert, Text, View, TouchableHighlight, TouchableNativeFeedback, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'

export default class TestTouchableViews extends Component {
    _onPressBtn() {
        // Alert.alert("Alert");
    }

    render() {
        return (
            <View style={styles.container}>
                {/* <TouchableHighlight style={[styles.btn, {flex:1, backgroundColor: 'red'}]} onPress={this._onPressBtn}>
                    <Text style={styles.btnText}> Highlight </Text>
                </TouchableHighlight>

                <View style={{flex:1, backgroundColor:'#ff00ff', justifyContent:'center', alignItems: "center",}}>
                    <TouchableNativeFeedback  onPress={this._onPressBtn}>
                        <Text style={styles.btnText}> Feedback </Text>
                    </TouchableNativeFeedback>
                </View>

                <TouchableOpacity style={{flex:1, backgroundColor: '#5DCA5C', justifyContent:'center', alignItems: "center"}} onPress={this._onPressBtn}>
                    <Text style={styles.btnText}> Opatity </Text>
                </TouchableOpacity> */}

                <TouchableOpacity style={styles.btn} onPress={this._onPressBtn}>
                    <Text style={styles.btnText}> Opatity </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn} onPress={this._onPressBtn}>
                    <Text style={styles.btnText}> Opatity </Text>
                </TouchableOpacity>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1, // 居中，因为height = match_parent
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: "center",
        width: '100%',
        backgroundColor:'#D5DBDB',
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