import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  PixelRatio,
  Platform
} from "react-native";

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f9fa",
    // Adjust Platform
    ...Platform.select({
      ios: {
        marginTop: 50
      },
      android: {
        marginTop: 40
      }
    })
  },
  text: {
    padding: 10,
    height: 45,
    width: "50%",
    backgroundColor: "#52BE80",
    marginBottom: 1,
    color: "#000"
  }
});
