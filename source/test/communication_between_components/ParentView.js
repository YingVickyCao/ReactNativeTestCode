import React, { Component } from 'react';
import { View } from 'react-native';
import ChildComponent from "./ChildView";

export default class ParentComponent extends Component {
    render() {
        // const ParentChild = 'Parent -> Child'; 
        return (
            <View style={{
                padding: 20,
                marginTop: 10,
                backgroundColor: '#666',
                alignItems: 'center'
            }}>

                {/* <ChildComponent childData={ParentChild}></ChildComponent> */}
                <ChildComponent childData="ABC"></ChildComponent>
            </View>
        )
    }
}