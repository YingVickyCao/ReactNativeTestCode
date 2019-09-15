import React, { Component } from "react";
import {
  View,
  Text,
  Dimensions,
  PixelRatio,
} from "react-native";

import {styles} from '../tools/Styles'

const pxValue = PixelRatio.get();

/**
 * androdi:float
 * float -> int. parseInt(width)
 *
 * ios:int
 */
const { height, width } = Dimensions.get("window");

export default class TestSizeComponent extends Component {
  render() {
    // console
    // console.warn("warm"); // Yellow
    // console.error("error"); // Red
    // console.log("log");

    return (
      <View style={styles.container}>
        <Text style={styles.text}>1逻辑像素(dp) = {pxValue} 实际像素(px)</Text>
        <Text style={styles.text}>手机屏幕 高={height}逻辑像素</Text>
        <Text style={styles.text}>手机屏幕 宽={parseInt(width)}逻辑像素</Text>
      </View>
    );
  }
}