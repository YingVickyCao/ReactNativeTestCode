import {INCREMENT,DECREMENT } from '../TestConstants'

export const increment = (num) =>{
    return{
        type : INCREMENT,
        num
    }
}


export const decrement = (num) =>{
    return{
        type : DECREMENT,
        num
    }
}