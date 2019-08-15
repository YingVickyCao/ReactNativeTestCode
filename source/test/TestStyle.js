import React, { Component } from 'react'
import { Text, View, StyleSheet, AppRegistry } from 'react-native'

export default class Sample1 extends Component {
    render() {
        return (
            <View style={{backgroundColor:'black'}}>
                <Text style={{
                    backgroundColor: 'green',
                    color: 'red',
                    fontWeight: 'bold',
                    fontSize: 30,
                    alignSelf: "center",
                }}> Test Style</Text>
            </View>

            // <View >
            //     <Text style={styles.green}> Test Style </Text>
            // </View>
        );
    }
}
const styles = StyleSheet.create({
    green: {
        backgroundColor: 'green',
        color: 'red',
        fontWeight: 'bold',
        fontSize: 30,
        alignSelf: "center",
    },

    red: {
        color: 'red',
    },
});