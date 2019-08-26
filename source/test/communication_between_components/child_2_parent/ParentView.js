import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ChildComponent from "./ChildView";

export default class ParentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataFromChild: 0,
        }
    }

    // PO: setState
    // good
    handleChild = (value) => {
        console.log("ParentComponent,1," + this.state.dataFromChild)
        this.setState((prevState) => ({
            dataFromChild: value,
        }), () => {

            // console.log(this.state.dataFromChild)
            console.log("ParentComponent,2," + this.state.dataFromChild)
        }
        )
        console.log("ParentComponent,3," + this.state.dataFromChild)
    }

    // bad
    // handleChild = (value) => {
    //     console.log("ParentComponent,1," + this.state.dataFromChild)
    //     this.setState({
    //         dataFromChild: (this.state.dataFromChild +1),
    //     })
    //     console.log("ParentComponent,3," + this.state.dataFromChild)
    // }

    render() {
        const { dataFromChild } = this.state;
        console.log("ParentComponent,4," + this.state.dataFromChild);
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