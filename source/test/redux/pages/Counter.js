
import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import store from '../store/index'
// import { connect } from 'react-redux'
import { increment, decrement } from '../action/counter'

export default class Counter extends Component {
    // Mounting
    constructor(props) {
        super(props)
        this.state = store.getState();
        store.subscribe(() => {
            console.log(store.getState())
            this.setState(store.getState())
        })
        console.log("Mounting:constructor");
    }
    componentDidMount() {
        console.log("Mounting:componentDidMount");
    }
    // Updating
    shouldComponentUpdate() {
        console.log("Updating:shouldComponentUpdate");
        return true;
    }
    // getSnapshotBeforeUpdate() {
    //     console.log("Updating:getSnapshotBeforeUpdate");
    // }

    componentWillMount(){
        console.log("Mounting:componentWillMount");
    }
    componentDidUpdate() {
        console.log("Updating:componentDidUpdate");
    }

    // Unmounting
    componentWillUnmount() {
        console.log("Unmounting:componentWillUnmount");
    }
    // Error Handling
    componentDidCatch() {
        console.log("Error Handling:componentDidCatch");
    }

    // Mounting + Updating 
    render() {
        console.log("Mounting + Updating:render");

        return (

            <View style={styles.container}>
                <TouchableOpacity onPress={this._onPress4Increment}>
                    <Text style={styles.action} >
                        +
                        </Text>
                </TouchableOpacity>


                <Text style={styles.num}>
                    {this.state.num}
                </Text>

                <TouchableOpacity onPress={this._onPress4Decrement}>
                    <Text style={[styles.action, { width: 100 }]}>
                        -
                    </Text>
                </TouchableOpacity>
            </View >

        );
    }
    _onPress4Increment() {
        store.dispatch(increment())
    }

    _onPress4Decrement() {
        store.dispatch(decrement())
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0B27A',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center",
        minHeight: 100,
    }
    , action: {
        fontSize: 50,
        color: '#4EEB68',
        backgroundColor: '#ff0000',
    }
    , num: {
        fontSize: 50,
        color: 'green',
        paddingHorizontal: 20
    }
});
