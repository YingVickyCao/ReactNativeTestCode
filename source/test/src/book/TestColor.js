import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styles } from '../tools/Styles';

export default class ColorComponent extends Component {
	render() {
		return (
			<View style={styles.container}>
				{/* <Text style={(styles.testSizeBig, { color: 'red' })}>red</Text> */}
				<Text style={{ color: 'red' }}>red</Text>
				<Text style={{ color: '#ff0000' }}>#RGB</Text>
				<Text style={{ color: '#ff0000ff' }}>#RGBA</Text>
				<Text style={{ color: 'rgb(255,0,0)' }}>rgb</Text>
				<Text style={{ color: 'rgba(255,0,0,1)' }}>rgba</Text>
				<Text style={{ color: 'hsl(120,65%,75%)' }}>hsl</Text>
				<Text style={{ color: 'hsla(120,65%,75%,0.7)' }}>hsla</Text>
			</View>
		);
	}
}
