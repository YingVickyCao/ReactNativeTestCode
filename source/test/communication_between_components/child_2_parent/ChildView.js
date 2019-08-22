import React, { Component } from 'react'
import { TouchableOpacity, Text } from 'react-native'

export default class ChildComponent extends Component {
    getDate() {
        var date = new Date();
        var year = date.getFullYear().toString();
        var month = (date.getMonth() + 1).toString();
        var day = date.getDate().toString();
        var hour = date.getHours().toString();
        var minute = date.getMinutes().toString();
        var s = date.getSeconds().toString();
        return year + '年' + month + '月' + day + '日' + ' ' + hour + ':' + minute + ":" + s;
    };

    render() {
        const { childData, handleChild } = this.props;
        const value = this.getDate();
        return (
            <TouchableOpacity style={{
                width: 1000,
                height: 50,
                backgroundColor: '#f00',
                justifyContent: 'center',
                alignItems: 'center'
            }} onPress={handleChild.bind(this, value)} >
                <Text>
                    {childData}
                </Text>

                <Text> Click Me</Text>

            </TouchableOpacity>
        )
    }
}