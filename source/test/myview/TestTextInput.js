import React, { Component } from 'react'
import { Text, TextInput, View } from 'react-native'

export default class ff extends Component {
    constructor(props) {
        super(props);

        this.state = { text: 'Default' }
    }
    render() {
        return (
            <View style={{ flex: 1, flexDirection: "column"}}>
                <TextInput style={{ height: 100, alignItems:'stretch',borderColor: '#f00', borderWidth: 1, backgroundColor: 'gray' }}
                    onChangeText={(text) => this.setState({ text })} > Auto</TextInput>
                
                <Text style={{  alignSelf:'center',flex:0, width:100, backgroundColor: '#0f0' }}> {this.state.text} </Text>
            </View>
        );
    }
}