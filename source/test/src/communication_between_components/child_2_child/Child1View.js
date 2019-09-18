import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styles } from '../CommunicationStyle';
import { buildDate } from '../DateInfo';

export default class Child1Component extends Component {
	render() {
		const dataInfo = buildDate();

		return (
			<View
				style={{
					width: '80%',
					height: 150,
					backgroundColor: '#F0B27A',
					justifyContent: 'center',
					alignItems: 'center'
				}}
			>
				<Text>Child 1</Text>
				<Text>{dataInfo}</Text>

				<Text
					style={styles.btn}
					onPress={() => {
						this.props.handleChildData(dataInfo);
					}}
				>
					{' '}
					Click Me (Child -> Child){' '}
				</Text>
			</View>
		);
	}
}
