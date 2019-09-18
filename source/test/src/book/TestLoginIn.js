import React, { Component } from "react";
import { View, Text, TextInput } from "react-native";
import { styles } from "../tools/Styles";

export default class LoginIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      phone: "",
      pwd: ""
    };

    this._onChangeText_4_pwd = this._onChangeText_4_pwd.bind(this);
  }

  _onChangeText_4_phone(newValue) {
    this.setState(state => {
      return {
        phone: newValue
        /**
         * 即使state 变量 的值不变，同样render(). 因此推测，React 框架在比较state时，比较的是state 变量的地址，而非值。
         * render(),  state:{phone: 123, pwd: ""}
           render(),  state:{phone: 123, pwd: ""}
         */
        // phone: 123
      };
    });
  }

  _onChangeText_4_pwd(newValue) {
    this.setState(() => {
      return {
        pwd: newValue
      };
    });
  }

  render() {
    console.log("TestLogin, render(), ", this.state);

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Input phone"
          onChangeText={newValue => this._onChangeText_4_phone(newValue)}
        />

        <Text style={styles.text}>{this.state.phone}</Text>

        <TextInput
          style={styles.input}
          placeholder="Input pwd"
          onChangeText={this._onChangeText_4_pwd}
          secureTextEntry={true}
        />
        <Text style={styles.text}>{this.state.pwd}</Text>

        <Text style={styles.btn}>Confirm</Text>
      </View>
    );
  }
}
