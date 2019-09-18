import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class TestAlignItems extends Component {
	render() {
		return (
			// <View style={{ flex: 1, flexDirection: "column", justifyContent: 'center', alignItems: 'flex-end' }}>
			// { <View style={{ flex: 1, flexDirection: "column", justifyContent: 'center', alignItems: 'flex-start' }}>
			// { <View style={{ flex: 1, flexDirection: "column", justifyContent: 'center', alignItems: 'center' }}> }
			//     <View style={{ width: 50, height: 50, backgroundColor: '#0f0' }}></View>
			//     <View style={{ width: 50, height: 50, backgroundColor: '#f00' }}></View>
			//     <View style={{ width: 50, height: 50, backgroundColor: '#00f' }}></View>
			// </View >

			// If alignItems: 'stretch' works. must not set width
			<View
				style={{
					flex: 1,
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'stretch'
				}}
			>
				<View style={{ width: 50, height: 50, backgroundColor: '#f00' }}></View>
				<View style={{ height: 50, backgroundColor: '#0f0' }}></View>
				<View style={{ width: 50, height: 50, backgroundColor: '#00f' }}></View>
			</View>
			// <Text style={{color: 'black'}}>Hello world</Text>
		);
	}
}
