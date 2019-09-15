import React, { Component } from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";

export default class ListComponent extends Component {
  render() {
    //  let， error
    // 可以是任意名字，例如key
    var datas = [
      { key: "1" },
      { key: "2" },
      { key: "3" },
      { key: "4" },
      { key: "5" },
      { key: "6" },
      { key: "7" },
      { key: "8" },
      { key: "9" },
      { key: "10" }
    ];

    return (
      <View style={styles.container}>
        <FlatList
          // data={[
          //     { key: "1" },
          //     { key: "2" },
          //     { key: "3" },
          //     { key: "4" },
          //     { key: "5" },
          //     { key: "6" },
          //     { key: "7" },
          //     { key: "8" },
          //     { key: "9" },
          //     { key: "10" },
          // ]}

          data={datas}
          renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    backgroundColor: "#bbaacc",
  },
  item: {
    padding: 10,
    height: 45,
    backgroundColor: "#aabbcc",
    marginBottom: 1
  }
});
