import React, { Component } from 'react'
import { Switch, View } from 'react-native'

export default class TestSwitch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOn: false,
        }
    }


    render() {
        return (
            <View style={{ marginTop: 30, alignItems: "center" }}>
                <Switch trackColor='yellow' thumbColor="green" value={this.state.isOn}
                    onValueChange={(value) => {
                        this.setState({ isOn: value })
                    }} />
            </View>
        );
    }

    // TODO:
    // _onValueChange4Switch() {
    //     if (this.state.isOn) {
    //         this.setState({
    //             isOn: false,
    //         })
    //     } else {
    //         this.setState({
    //             isOn: true,
    //         })
    //     }
    // }
}
