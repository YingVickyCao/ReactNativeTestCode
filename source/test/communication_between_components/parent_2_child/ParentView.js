import React, { Component } from 'react';
import { View } from 'react-native';
import ChildComponent from "./ChildView";

export default class ParentComponent extends Component {
    render() {
        {/* 方式2： */ }
        // const parent2Child = 'Parent -> Child'; 

        {/* 方式3： */ }
        let parent2Child = 'Parent -> Child';

        return (
            <View style={{
                padding: 20,
                marginTop: 10,
                backgroundColor: '#666',
                alignItems: 'center'
            }}>
                {/* 写成变量的好处：向child传递的props 不能更改。定义成变量时，可以修改变量的值，从而自动改变child的显示  */}
                <ChildComponent childData={parent2Child}></ChildComponent>

                {/* 方式1： */}
                {/* <ChildComponent childData="ABC"></ChildComponent> */}
            </View>
        )
    }
}