import React, { Component } from "react";
import { View, Text, TextInput } from "react-native";
import { styles } from "../tools/Styles";

export default class LoginIn extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Input phone" />
        <TextInput
          style={styles.input}
          placeholder="Input pwd"
          secureTextEntry={true}
        />
        <Text style={styles.btn}>Confirm</Text>
      </View>
    );
  }
}