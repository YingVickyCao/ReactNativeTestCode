import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from '../tools/Styles';

export default class LoginIn extends Component {
	constructor(props) {
		super(props);

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
	_onChangeText_4_phone(newValue) {
		this.setState(state => {
			return {
				phone: newValue
			};
		});
	}

	// _onChangeText_4_pwd(newValue) {
	// 	this.setState(() => {
	// 		return {
	// 			pwd: newValue
	// 		};
	// 	});
	// }

	// new state 根据old state 的key，实现modify和Add key对应的value
	_onChangeText_4_pwd(newValue) {
		// setState is before render();
		this.setState(oldState => {
			for (var item in oldState) {
				console.log(item, oldState[item]);
			}
			return {
				pwd: newValue,
				a_var_brand_in_newState: 'I am  a new var'
			};
		}, this._changePwdDone);
	}
	_changePwdDone() {
		// after render();
		console.log('Pwd changed.');
	}

	render() {
		console.log('TestLogin, render(), ', this.state);

		return (
			<View style={styles.container}>
				<TextInput style={styles.input} placeholder='Input phone' onChangeText={newValue => this._onChangeText_4_phone(newValue)} />

				<Text style={styles.text}>{this.state.phone}</Text>

				<TextInput style={styles.input} placeholder='Input pwd' onChangeText={this._onChangeText_4_pwd} secureTextEntry={true} />
				<Text style={styles.text}>{this.state.pwd}</Text>

				<Text style={styles.btn}>Confirm</Text>
			</View>
		);
	}
}
