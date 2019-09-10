
import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import store from '../store/index'
import { increment, decrement } from '../action/counter'

export default class Counter extends Component {
    // Mounting
    constructor(props) {
        super(props)

        this.state = store.getState();

        this.unsubscribe = store.subscribe(() => {
            console.log(store.getState())
            this.setState(store.getState())
        })
    }

    componentWillUnmount() {
        super.componentWillUnmount();

        // Stop listening to state updates
        this.unsubscribe();
    }

    render() {
        return (

            <View style={styles.container}>
                <Text style={styles.action} onPress={this._onPress4Increment} >
                    +
                </Text>

                <Text style={styles.num}>
                    {this.state.num}
                </Text>

                <Text style={[styles.action, { width: 50, alignItems: "center" }]} onPress={this._onPress4Decrement} >
                    -
                </Text>
            </View >

        );
    }
    _onPress4Increment() {
        // Dispatching Actions
        store.dispatch(increment())
    }

    _onPress4Decrement() {
        store.dispatch(decrement())
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center",
        minHeight: 100,
    }
    , action: {
        fontSize: 50,
        color: '#000',
        backgroundColor: '#ff0000',
    }
    , num: {
        fontSize: 50,
        color: '#00ff00',
        paddingHorizontal: 20
    }
});
