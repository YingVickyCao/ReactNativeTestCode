import { createStore, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'
import counter from '../reducers/Counter'

const store = createStore(
	counter
)
export default store;