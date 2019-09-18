/**
 * TODO:
 * 适配刘海 iphoneX
 * https://github.com/JonsonHI/IphoneX
 */
import { Dimensions, Platform } from 'react-native';

export let screenW = Dimensions.get('window').width;
export let screenH = Dimensions.get('window').height;

// iPhoneX
const X_WIDTH = 375;
const X_HEIGHT = 812;
export default class IphoneX {
	static ifIphoneX(iphoneXStyle, iosStyle, androidStyle) {
		if (Platform.OS === 'ios' && ((screenH === X_HEIGHT && screenW === X_WIDTH) || (screenH === X_WIDTH && screenW === X_HEIGHT))) {
			console.log('iPhoneX');
			return iphoneXStyle;
		} else if (Platform.OS === 'ios') {
			console.log('Iphone');
			return iosStyle;
		} else {
			if (androidStyle) return androidStyle;
			return iosStyle;
		}
	}
}
