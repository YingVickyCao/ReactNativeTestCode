//  在发起 action 后 state 应该如何更新
//  Reducers 指定了应用状态的变化如何响应 actions 并发送到 store 的
// 根据 action 更新 state 

import { VisibilityFilters, SET_VISIBILITY_FILTER, TOGGLE_TODO, ADD_TODO } from '../TestConstants'

const initialState = {
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    todos: []
}

/*
function todoApp(state, action){
  if (typeof state === 'undefined') {
      return initialState
    }

    // 这里暂不处理任何 action，
    // 仅返回传入的 state。
    return state    
}*/

/*
export default todoApp(state = initialState, action)  {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            // 创建副本, 不修改state
            return Object.assign({}, state, { visibilityFilter: action.filter })

        case ADD_TODO:
            return Object.assign({}, state, {
                todos: [
                    ...state.todos,
                    {
                        text: action.text,
                        completed: false
                    }
                ]
            })

        case TOGGLE_TODO:
            return Object.assign({}, state, {
                todos: state.todos.map((todo, index) => {
                    if (index === action.index) {
                        return Object.assign({}, todo, {
                            completed: !todo.completed
                        })
                    }
                    return todo
                })
            })
        default:
            return state
    }
}*/

function todo(state[], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state.todos,
                {
                    text: action.text,
                    completed: false
                }
            ]
        case TOGGLE_TODO:
            return state.todos.map((todo, index) => {
                if (index === action.index) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    })
                }
                return todo
            })
    }

}
export default function todoApp(state = initialState, action)  {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            // 创建副本, 不修改state
            return Object.assign({}, state, { visibilityFilter: action.filter })

        case ADD_TODO:
            return Object.assign({}, state, {
                todos: todo(state: todos, action)
            })

        case TOGGLE_TODO:
            return Object.assign({}, state, {
                todos: todos(state.todos, action)
            })
        default:
            return state
    }
}