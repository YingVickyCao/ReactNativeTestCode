import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styles } from '../tools/Styles';

export default class PwdTextComponent extends Component {
	render() {
		const { pwd } = this.props;
		console.log('pwd:', pwd);

		return (
			<View style={styles.container_4_child}>
				<Text style={styles.label}>{pwd}</Text>
			</View>
		);
	}
}
