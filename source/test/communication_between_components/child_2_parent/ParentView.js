import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ChildComponent from "./ChildView";

export default class ParentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataFromChild: '',
        }
    }

    handleChild = (value) => {
        this.setState({
            dataFromChild: value,
        })
    }

    render() {
        const { dataFromChild } = this.state;

        return (
            <View style={{
                padding: 20,
                marginTop: 10,
                backgroundColor: '#666',
                alignItems: 'center'
            }}>
                <Text>{dataFromChild}</Text>
                <ChildComponent childData={dataFromChild} handleChild={this.handleChild}></ChildComponent>
            </View >
        )
    }
}