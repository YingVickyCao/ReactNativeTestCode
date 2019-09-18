import React, { Component } from 'react';
import { SectionList, View, Text, StyleSheet } from 'react-native';

export default class ListComponent extends Component {
	render() {
		var listData = [{ headerTitle: 'A', data: ['A1', 'A2'] }, { headerTitle: 'B', data: ['B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7'] }];

		return (
			// 可以是任意名字，例如 headerTitle
			<View style={styles.container}>
				<SectionList
					// sections={[
					//     { headerTitle: 'A', data: ['A1','A2'] },
					//     { headerTitle: 'B', data: ['B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7'] },
					// ]}
					sections={listData}
					renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
					renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}> {section.headerTitle}</Text>}
					keyExtractor={(item, index) => index}
				/>
			</View>

			/*
            keyExtractor:
            此函数用于为给定的item生成一个不重复的key。Key的作用是使React能够区分同类元素的不同个体，以便在刷新时能够确定其变化的位置，减少重新渲染的开销。若不指定此函数，则默认抽取item.key作为key值。若item.key也不存在，则使用数组下标。*/
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 22,
		backgroundColor: '#CCD1D1'
	},
	item: {
		padding: 10,
		height: 45,
		backgroundColor: '#58D68D',
		marginBottom: 1
	},
	sectionHeader: {
		paddingTop: 2,
		paddingLeft: 10,
		paddingRight: 10,
		paddingBottom: 2,
		fontSize: 14,
		fontWeight: 'bold',
		backgroundColor: 'rgba(247,247,247,1.0)'
	}
});
