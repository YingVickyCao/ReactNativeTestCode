import React, { Component } from "react";
import { View, Text } from "react-native";
import ChildComponent from "./ChildView";
import { buildDate } from "../DateInfo";
import { styles } from "../CommunicationStyle";

//  import 的是Component，而不是定义Component的js文件

export default class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { parent_to_child_1: buildDate() };
    this._onPressUpdateDate = this._onPressUpdateDate.bind(this);
  }

  _onPressUpdateDate() {
    this.setState({
      parent_to_child_1: buildDate()
    });
  }

  // componentDidMount() {
  //     // 每1000毫秒对showText状态做一次取反操作
  //     setInterval(() => {
  //         this._onPress_4_update_date_info();
  //     }, 5000);
  // }

  render() {
    {
      /* 方式2： */
    }
    // const parent_to_child_2 = 'Parent -> Child';

    {
      /* 方式3： */
    }
    let parent_to_child_2 = "Parent -> Child";

    return (
      <View style={styles.container}>
        <Text style={styles.topic}> Parent -> Child</Text>
        <Text style={styles.label}> Parent</Text>
        <Text style={styles.label}> {this.state.parent_to_child_1}</Text>
        <Text style={styles.btn} onPress={this._onPressUpdateDate}>
          {" "}
          Update{" "}
        </Text>

        {/* 写成变量的好处：向child传递的props 不能更改。定义成变量时，可以修改变量的值，从而自动改变child的显示  */}
        <ChildComponent childData={parent_to_child_2}></ChildComponent>

        <ChildComponent
          style={{ marginTop: 20 }}
          childData={this.state.parent_to_child_1}
        ></ChildComponent>

        {/* 方式1： */}
        {/* <ChildComponent childData="ABC"></ChildComponent> */}
      </View>
    );
  }
}
