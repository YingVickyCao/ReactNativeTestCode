import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class ff extends Component {
	render() {
		return (
			// flexDirection:'column',justifyContent:'flex-start'
			// flexDirection:'column',justifyContent:'center'
			// flexDirection:'column',justifyContent:'flex-end'
			// flexDirection:'column',justifyContent:'space-around'
			// flexDirection:'column',justifyContent:'space-between'
			// flexDirection:'column',justifyContent:'space-evenly'

			// flexDirection:'row',justifyContent:'flex-start'
			// flexDirection:'row',justifyContent:'center'
			// flexDirection:'row',justifyContent:'flex-end'
			// flexDirection:'row',justifyContent:'space-around'
			// flexDirection:'row',justifyContent:'space-between'
			// flexDirection:'row',justifyContent:'space-evenly'
			<View
				style={{
					flex: 1,
					flexDirection: 'column',
					justifyContent: 'space-evenly',
					backgroundColor: '#120ff0f'
				}}
			>
				<View style={{ width: 50, height: 50, backgroundColor: '#ff0000' }} />
				<View style={{ width: 50, height: 50, backgroundColor: '#00ff00' }} />
				<View style={{ width: 50, height: 50, backgroundColor: '#0000ff' }} />
			</View>
		);
	}
}
