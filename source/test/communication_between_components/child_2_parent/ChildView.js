import React, { Component } from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { buildDate } from '../DateInfo'

export default class ChildComponent extends Component {
    render() {
        const { childData, handleChild } = this.props;
        const dataInfo = buildDate();
        
        return (
            <TouchableOpacity style={{
                width: 100,
                height: 50,
                backgroundColor: '#f00',
                justifyContent: 'center',
                alignItems: 'center'
            }} onPress={handleChild.bind(this, dataInfo)} >
                <Text>
                    {childData}
                </Text>

                <Text> Click Me</Text>

            </TouchableOpacity>
        )
    }
}