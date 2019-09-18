import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styles } from '../CommunicationStyle';

export default class Child2Component extends Component {
	render() {
		const { childData } = this.props;

		return (
			<View
				style={{
					width: '80%',
					height: 100,
					backgroundColor: '#0f0',
					justifyContent: 'center',
					alignItems: 'center'
				}}
			>
				<Text>Child 2</Text>
				<Text style={{ marginTop: 10 }}>{this.props.childData}</Text>
			</View>
		);
	}
}
