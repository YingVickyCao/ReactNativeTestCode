import React, { Component } from "react";
import { Text, View } from "react-native";

export default class TestOriation extends Component {
  render() {
    return (
      //  Flex Direction
      // <View style={{ flex: 1, flexDirection:'row' }}>`
      //     <View style={{ width: 50, height: 50, backgroundColor: '#ff0000' }} />
      //     <View style={{ width: 50, height: 50, backgroundColor: '#00ff00' }} />
      //     <View style={{ width: 50, height: 50, backgroundColor: '#0000ff' }} />
      // </View>

      <View style={{ flex: 1, flexDirection: "row" }}>
        <View style={{ flex: 1, height: 50, backgroundColor: "#ff0000" }} />
        <View style={{ flex: 2, height: 50, backgroundColor: "#00ff00" }} />
        <View style={{ flex: 3, height: 50, backgroundColor: "#0000ff" }} />
      </View>
    );
  }
}
