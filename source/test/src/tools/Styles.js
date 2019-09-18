import { StyleSheet, Platform } from 'react-native';

/**
 * ES6:
 * const styles = StyleSheet.create({}); 是一条语句。它定义了一个名为styles的对象。
 * 在styles内部定义了样式,返回reference from the given object
 */
// export const styles = {
export const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingStart: 10,
		paddingEnd: 10,
		alignItems: 'center',
		backgroundColor: '#EEEEEE',
		// Adjust Platform
		...Platform.select({
			ios: {
				marginTop: 50
			},
			android: {
				marginTop: 40
			}
		})
	},
	text: {
		padding: 10,
		height: 45,
		width: '100%',
		backgroundColor: '#FFEBEE',
		marginBottom: 1,
		color: '#000',
		marginBottom: 5
	},
	btn: {
		padding: 10,
		height: 45,
		width: '80%',
		textAlign: 'center',
		backgroundColor: '#69F0AE',
		marginBottom: 1,
		color: '#000',
		marginBottom: 5
	},
	input: {
		backgroundColor: '#E5E8E8',
		width: '100%',
		minHeight: 50,
		marginBottom: 5
	}
});
// };
