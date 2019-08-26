import * as TYPES from '../Constants';

// login
export function logIn(opt){
	return (dispatch) => {
		dispatch({'type': TYPES.LOGGED_DOING});
		let inner_get = fetch('http://www.baidu.com')
			.then((res)=>{
				dispatch({'type': TYPES.LOGGED_IN, user: testUser});
			}).catch((e)=>{
				console.log(e);
				dispatch({'type': TYPES.LOGGED_ERROR, error: e});
			});
	}
}
let testUser = {
	'name': 'abc',
	'age': '15',
	'page': 'https://developer.android.google.cn/'
};

// logout
export function logOut(){
	return {
		'type': TYPES.LOGGED_OUT
	}
}