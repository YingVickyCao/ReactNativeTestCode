import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styles } from '../tools/Styles';

export default class PhoneTextComponent extends Component {
	render() {
		const { phone } = this.props;
		console.log('phone:', phone);

		return (
			<View style={styles.container_4_child}>
				<Text style={styles.label}>{phone}</Text>
			</View>
		);
	}
}
