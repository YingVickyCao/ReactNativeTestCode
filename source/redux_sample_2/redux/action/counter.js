import * as TYPES from '../Constants';

// export const increment = (num) => {
//     return {
//         type: INCREMENT,
//         num = num + 1,
//     }
// }

export const increment = () => {
    return {
        type: TYPES.INCREMENT,
    }
}

// export const decrement = (num) => {
//     return {
//         type: INCREMENT,
//         num =num -1,
//     }
// }

export const decrement = () => {
    return {
        type: TYPES.DECREMENT,
    }
}