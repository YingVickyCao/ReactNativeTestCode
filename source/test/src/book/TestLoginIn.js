import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from '../tools/Styles';
// import PhoneTextComponent from './phoneText';
import PwdTextComponent from './pwdText';

export default class LoginIn extends Component {
	static staticNum = 1; // 组件的静态成员变量
	// 组件的静态成员函数
	static printStaticNum() {
		console.log('printStaticNum:' + LoginIn.staticNum);
	}

	constructor(props) {
		super(props);
		this.isInit = false; // 组件的成员变量

		this.state = {
			phone: '',
			pwd: ''
		};

		this._onChangeText_4_pwd = this._onChangeText_4_pwd.bind(this);
	}

	/**
         * 即使state 变量 的值不变，同样render(). 因此推测，React 框架在比较state时，比较的是state 变量的地址，而非值。
         * render(),  state:{phone: 123, pwd: ""}
           render(),  state:{phone: 123, pwd: ""}
         */
	// phone: 123
	// write_style_1:
	// _onChangeText_4_phone(newValue) {
	// 	this.setState(state => {
	// 		console.log('_onChangeText_4_phone:', this);
	// 		return {
	// 			phone: newValue
	// 		};
	// 	});
	// }

	// write_style_2:
	// _onChangeText_4_phone(newValue) {
	// 	this.setState(() => {
	// 		return {
	// 			phone: newValue
	// 		};
	// 	});
	// }

	// write_style_3:
	_onChangeText_4_phone(newValue) {
		this.setState({ phone: newValue });
	}

	_onChangeText_4_pwd(newValue) {
		this.setState(() => {
			return {
				pwd: newValue
			};
		});
	}

	// new state 根据old state 的key，实现modify和Add key对应的value
	// _onChangeText_4_pwd(newValue) {
	// 	// setState is before render();
	// 	this.setState(oldState => {
	// 		for (var item in oldState) {
	// 			console.log(item, oldState[item]);
	// 		}
	// 		return {
	// 			pwd: newValue,
	// 			a_var_brand_in_newState: 'I am  a new var'
	// 		};
	// 	}, this._changePwdDone);
	// }
	_changePwdDone() {
		// after render();
		console.log('Pwd changed.');
	}

	render() {
		console.log('TestLogin, render(), ', this.state);
		console.log('render(), isInit 1:', this.isInit);
		this.isInit = true;
		console.log('render(), isInit 2:', this.isInit);

		LoginIn.printStaticNum();
		LoginIn.staticNum = 100;
		LoginIn.printStaticNum();

		console.log('render:', this);

		return (
			<View style={styles.container}>
				{/* // write_style_4:  onChangeText={(phone) => this.setState({ phone }) */}
				<TextInput style={styles.input} placeholder='Input phone' onChangeText={newValue => this._onChangeText_4_phone(newValue)} />

				<Text style={styles.text}>{this.state.phone}</Text>
				{/* <PhoneTextComponent style={styles.text} phone={this.state.phone}></PhoneTextComponent> */}

				<TextInput style={styles.input} placeholder='Input pwd' onChangeText={this._onChangeText_4_pwd} secureTextEntry={true} />

				{/* <Text style={styles.text}>{this.state.pwd}</Text> */}
				<PwdTextComponent style={styles.text} pwd={this.state.pwd}></PwdTextComponent>

				<Text style={styles.btn}>Confirm</Text>
			</View>
		);
	}
}
