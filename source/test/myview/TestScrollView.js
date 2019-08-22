import React, { Component } from 'react'
import { AppRegistry, View, Text, ScrollView } from 'react-native'

//  放置在ScrollView中的所有组件都会被渲染，无论组件因为内容太长被挤出了屏幕外.
// 若滚动列表较长，FlatList instead of ScrollView
export default class TestScrollViewComponent extends Component {
    render() {
        return (
            <ScrollView>
                <Text style={{ fontSize: 96 }}>1</Text>
                <Text style={{ fontSize: 96 }}>2</Text>
                <Text style={{ fontSize: 96 }}>3</Text>
                <Text style={{ fontSize: 96 }}>4</Text>
                <Text style={{ fontSize: 96 }}>5</Text>
                <Text style={{ fontSize: 96 }}>6</Text>
                <Text style={{ fontSize: 96 }}>7</Text>
                <Text style={{ fontSize: 96 }}>8</Text>
                <Text style={{ fontSize: 96 }}>9</Text>
                <Text style={{ fontSize: 96 }}>10</Text>
                <Text style={{ fontSize: 96 }}>11</Text>
                <Text style={{ fontSize: 96 }}>12</Text>
            </ScrollView>
        )
    };
}