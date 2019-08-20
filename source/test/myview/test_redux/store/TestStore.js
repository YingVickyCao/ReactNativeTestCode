/**
 * Store
 *1.  联系state 和 action，reducers
 *
 * 2. Store用处
 *  维持应用的 state；
    提供 getState() 方法获取 state；
    提供 dispatch(action) 方法更新 state；
    通过 subscribe(listener) 注册监听器;
    通过 subscribe(listener) 返回的函数注销监听器。

    3. Redux 应用只有一个单一的 store。当需要拆分数据处理逻辑时，你应该使用 reducer 组合 而不是创建多个 store。
 */

import { createStore } from 'redux'
import todoApp from '../reducer'

// console.log(store.getState())
