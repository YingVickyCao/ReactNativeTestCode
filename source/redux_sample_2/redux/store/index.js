import { createStore, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'
import counter from '../reducers/Counter'

const store = createStore(
	counter
)
export default store;

// 'use strict';


// import { applyMiddleware, createStore } from 'redux';
// import thunk from 'redux-thunk';
// import { persistStore, autoRehydrate } from 'redux-persist';
// import { AsyncStorage } from 'react-native';
// import reducers from '../reducers';

// const logger = store => next => action => {
// 	if(typeof action === 'function') console.log('dispatching a function');
// 	else console.log('dispatching', action);
// 	let result = next(action);
// 	console.log('next state', store.getState());
// 	return result;
// }

// let middlewares = [
// 	logger,
// 	thunk
// ];

// let createAppStore = applyMiddleware(...middlewares)(createStore);

// export default function configureStore(onComplete: ()=>void){
// 	const store = autoRehydrate()(createAppStore)(reducers);
// 	let opt = {
// 		storage: AsyncStorage,
// 		transform: [],
// 		//whitelist: ['userStore'],
// 	};
// 	persistStore(store, opt, onComplete);
// 	return store;
// }