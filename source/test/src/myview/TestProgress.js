import React, { Component } from "react";
import {
  ProgressBarAndroid,
  ProgressViewIOS,
  View,
  StyleSheet,
  Platform
} from "react-native";

export default class App extends Component {
  render() {
    if (Platform.OS === "android") {
      return (
        <View style={styles.container}>
          <ProgressBarAndroid style={styles.progress} />
          <ProgressBarAndroid style={styles.progress} styleAttr="Horizontal" />
          <ProgressBarAndroid
            style={styles.progress}
            styleAttr="Horizontal"
            color="red"
            indeterminate={false}
            progress={0.8}
            animating={true}
          />
          <ProgressBarAndroid
            style={styles.progress}
            styleAttr="Horizontal"
            color="red"
            indeterminate={false}
            progress={0.8}
            animating={false}
          />
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <ProgressViewIOS style={styles.progress} progress={0.3} />
          <ProgressViewIOS
            style={styles.progress}
            progressTintColor="purple"
            progress={0.2}
          />
          <ProgressViewIOS
            style={styles.progress}
            progressTintColor="red"
            trackTintColor="black"
            progress={0.4}
          />
          <ProgressViewIOS
            style={styles.progress}
            progressTintColor="yellow"
            progressViewStyle="bar"
            progress={0.6}
          />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'yellow',
    height: "50%",
    marginTop: 100
  },
  progress: {
    marginBottom: 50
  }
});
