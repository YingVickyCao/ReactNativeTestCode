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
            <View style={styles.container}>
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
                    <Picker.Item label="e" value="E" backgroundColor="yellow"></Picker.Item>
                </Picker >
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'green',
        margin: 20,

    },
    picker: {
        height: 50,
        width: 50
    },
});