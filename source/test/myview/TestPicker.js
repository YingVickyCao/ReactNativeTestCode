import React, { Compoent } from 'react'
import { View, StyleSheet, Picker } from 'react-native'

export default class TestPicker extends Picker {
    constructor(props) {
        super(props);

        this.state = {
            num: "c",
        }
    }


    render() {
        return (
            <Picker
                style={styles.picker}
                selectedValue={
                    this.state.num
                }
                onValueChange={(itemValue, itemIndex) => this.setState({ num: itemValue })}
                mode={"dropdown"}
                prompt={"Num"}
            >
                <Picker.Item label="a" value="A"></Picker.Item>
                <Picker.Item label="b" value="B"></Picker.Item>
                <Picker.Item label="c" value="C"></Picker.Item>
                <Picker.Item label="d" value="D"></Picker.Item>
                <Picker.Item label="e" value="E"></Picker.Item>
            </Picker >
        );
    }
}

const styles = StyleSheet.create({
    container: {

    },
    picker: {
        height: 50,
        width: 50
    },
});