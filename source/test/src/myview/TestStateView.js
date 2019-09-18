import React, { Component } from "react";
import { Text, View, StyleSheet, AppRegistry } from "react-native";

class BlinkView extends Component {
  state = { isShowingText: true };

  componentDidMount() {
    // 每1000毫秒对showText状态做一次取反操作
    setInterval(() => {
      this.setState(previousState => {
        return { isShowingText: !previousState.isShowingText };
      });
    }, 1000);
  }

  render() {
    // 根据当前showText的值决定是否显示text内容
    if (!this.state.isShowingText) {
      return null;
    }

    return (
      <Text style={{ backgroundColor: "#ff0000", textAlign: "center" }}>
        {this.props.text}
      </Text>
    );
  }
}

export default class BlinkPage extends Component {
  render() {
    return (
      <View>
        <BlinkView text="A" />
        <BlinkView text="B" />
      </View>
    );
  }
}
