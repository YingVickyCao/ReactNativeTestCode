import React, { Component } from 'react'
import { Switch, View, StyleSheet } from 'react-native'

export default class TestSwitch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOn: false,
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <Switch trackColor='#00ff00' thumbColor="#ff0000" value={this.state.isOn} ios_backgroundColor="#0000ff"
                    onValueChange={(value) => {
                        this.setState({ isOn: value })
                    }} />
            </View>
        );
    }
    // TODO:
    _onValueChange4Switch(value) {
        this.setState({ isOn: value })
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30, alignItems: "center"
    },
});