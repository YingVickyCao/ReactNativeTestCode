import {ADD_TODO,SET_VISIBILITY_FILTER} from '../TestConstants'

// Send action  actions 只是描述了有事情发生
/*
const ADD_TODO = 'ADD_TODO'

{
    type: ADD_TODO,
    text: 'Build my first Redux app'
  }
*/

// Flux 
/*
function addTodoWithDispatch(text) {
    const actioin= {
        type: ADD_TODO,
        text
    }

    dispatch(actioin)
}*/


/*
function addTodo(text) {
    return {
        type: ADD_TODO,
        text
    }
}
export const boundAddTodo = text => dispatch(addTodo(text))
*/

export function addTodo(text) {
    return {
        type: ADD_TODO,
        text
    }
}

export function toggleTodo(index) {
    return { type: TOGGLE_TODO, index }
  }
  
  export function setVisibilityFilter(filter) {
    return { type: SET_VISIBILITY_FILTER, filter }
  }