import React, { Component } from 'react';
import { View } from 'react-native';

export default class TestAlignSelf extends Component {
	render() {
		return (
			<View
				style={{
					flex: 1,
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'flex-start'
				}}
			>
				<View style={{ width: 50, height: 50, backgroundColor: '#f00' }}></View>
				<View
					style={{
						width: 50,
						height: 50,
						backgroundColor: '#0f0',
						alignSelf: 'flex-end'
					}}
				></View>
				<View style={{ width: 50, height: 50, backgroundColor: '#00f' }}></View>
			</View>
		);
	}
}
