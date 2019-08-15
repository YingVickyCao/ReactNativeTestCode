import React, { Component } from 'react'
import { Text, View, StyleSheet, AppRegistry } from 'react-native'

export default class Sample1 extends Component {
    render() {
        return (
            // <View >
            //     <Text style={{
            //         color: '#00ff00',
            //         fontWeight: 'bold',
            //         fontSize: 30,
            //         alignSelf: "center",
            //     }}> Test Style</Text>
            // </View>

            <View>
                <Text> Test Style </Text>
                <Text style={styles.green}> Test Style </Text>
                <Text style={[styles.green, styles.red]}>Test Style</Text>
                <Text style={[styles.red, styles.green]}>Test Style</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    green: {
        color: '#00ff00',
        fontWeight: 'bold',
        fontSize: 30,
        alignSelf: "center",
    },

    red: {
        color: '#ff0000',
    },
});