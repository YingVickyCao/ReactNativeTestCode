import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { styles } from '../CommunicationStyle';

export default class ChildComponent extends Component {
    render() {
        const { childData } = this.props;
        // 等价于
        // const childData = this.props.childData;

        return (
            <View style={styles.container_4_child}>
                <Text style={styles.label}>Child</Text>
                <Text style={styles.label}>{childData}</Text>
            </View>
        );
    }
}