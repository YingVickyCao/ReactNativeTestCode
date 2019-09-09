import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { buildDate } from '../DateInfo'

export default class ChildComponent extends Component {

    render() {
        const dataInfo = buildDate();

        return (
            <View style={{
                width: '80%',
                height: 100,
                backgroundColor: '#F0B27A',
                justifyContent: 'center',
                alignItems: 'center'
            }} >
                <Text>
                    {dataInfo}
                </Text>

                <Text style={{ backgroundColor: '#f00', marginTop: 20 }} onPress={() => {
                    this.props.handleChildData(dataInfo)
                }} > Click Me ( Child -> Parent) </Text>
            </View >
        )
    }
}