import React, { Component } from 'react';
import { View, Text, AppRegistry, StyleSheet, Dimension, PixelRatio, Button } from 'react-native';

export default class TestWindowComponent extends Component {
    render() {
        return (
            <View>
                <Text> </Text>
                <Text> </Text>
                <Text> </Text>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 22,
      backgroundColor: "#f7f9fa",
    },
    text: {
      padding: 10,
      height: 45,
      backgroundColor: "#52BE80",
      marginBottom: 1
    }
  });
  