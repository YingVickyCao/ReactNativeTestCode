import React, { Component } from "react";
import { View, Text } from "react-native";
import Child1Component from "./Child1View";
import Child2Component from "./Child2View";
import { buildDate } from "../DateInfo";
import { styles } from "../CommunicationStyle";

//  import 的是Component，而不是定义Component的js文件

export default class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataFromChild: ""
    };
  }

  handleChildData = value => {
    this.setState(
      prevState => ({
        dataFromChild: value
      }),
      () => {}
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.topic}>Parent</Text>

        <Child1Component
          handleChildData={this.handleChildData.bind(this)}
        ></Child1Component>

        <Child2Component
          style={{ marginTop: 20 }}
          childData={this.state.dataFromChild}
        ></Child2Component>

        {/* 方式1： */}
        {/* <ChildComponent childData="ABC"></ChildComponent> */}
      </View>
    );
  }
}
