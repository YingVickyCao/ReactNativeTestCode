import * as TYPES from '../Constants';

export const increment = () => {
    return {
        type: TYPES.INCREMENT,
    }
}

export const decrement = () => {
    return {
        type: TYPES.DECREMENT,
    }
}