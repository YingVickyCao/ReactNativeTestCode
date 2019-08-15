import React, { Component } from 'react'
import { Text, View } from 'react-native'

class ItemView extends Component {
    render() {
        return (
            <View style={{ alignItems: 'center', marginTop: 10 }}>
                <Text> This is {this.props.name}</Text>
            </View>);
    }
}

export default class List extends Component {
    render() {
        return (
            < View style={{ alignItems: 'center', backgroundColor:'#ff0000',justifyContent: 'center'}}>

                <ItemView name='A' />
                <ItemView name='A' />
            </View >
        );
    }
}