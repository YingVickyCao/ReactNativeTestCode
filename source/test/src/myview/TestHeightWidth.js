import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class ff extends Component {
	render() {
		return (
			//  width , height
			// <View style={{ backgroundColor: '#00ff00', width: 100, height: 100 }} >
			// </View>

			//  height = width = 100% parent
			// <View style={{ flex: 1,backgroundColor: '#00ff00'}} />

			//  only height = 100% parnet, width = 100dp
			// <View style={{ flex: 1,backgroundColor: '#00ff00',width: 100 }} />

			// 组件能够撑满剩余空间的前提是其父容器的尺寸不为零。如果父容器既没有固定的width和height，也没有设定flex，则父容器的尺寸为零。其子组件如果使用了flex，也是无法显示的。
			// <View style={{ flex: 1 }}>
			//     <View style={{ flex: 1, backgroundColor: '#ff0000' }} />
			//     <View style={{ flex: 2, backgroundColor: '#00ff00' }} />
			//     <View style={{ flex: 3, backgroundColor: '#0000ff' }} />
			// </View>

			//  Flex Direction
			// <View style={{ flex: 1, flexDirection:'row' }}>`
			//     <View style={{ width: 50, height: 50, backgroundColor: '#ff0000' }} />
			//     <View style={{ width: 50, height: 50, backgroundColor: '#00ff00' }} />
			//     <View style={{ width: 50, height: 50, backgroundColor: '#0000ff' }} />
			// </View>

			<View style={{ flex: 1, flexDirection: 'row' }}>
				<Text style={{ backgroundColor: '#ff0000' }}> Auto</Text>
				<Text style={{ height: 50, backgroundColor: '#0f0' }}> B</Text>
				{/* <Text style={{ height: , backgroundColor: '#0f0' }}> B</Text> */}
			</View>
		);
	}
}
