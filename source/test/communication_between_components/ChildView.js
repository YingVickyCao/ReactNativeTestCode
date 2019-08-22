import React, { Component } from 'react'
import { TouchableOpacity, Text } from 'react-native'

export default class ChildComponent extends Component {
    render() {
        const { childData } = this.props;
        return (
            <TouchableOpacity style={{
                width: 50,
                height: 50,
                backgroundColor: '#f00',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text>{childData}</Text>
            </TouchableOpacity>
        )
    }
}