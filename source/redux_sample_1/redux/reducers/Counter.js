import * as TYPES from '../Constants';

const defaultState = {
    num: 0
}
export default (state = defaultState, action) => {
    console.log(state.num, action);
    switch (action.type) {
        case TYPES.INCREMENT:
            return Object.assign({}, state, {
                num: state.num + 1,
            })

        // 等价
        // ES6
        // case TYPES.DECREMENT:
        //         return Object.assign({},state,{
        //             num:state.num -1,
        //         })

        // ES7
        // case TYPES.DECREMENT:
        //     return { ...state, num: state.num - 1 };

        case TYPES.DECREMENT:
            return { ...state, ...{ num: state.num - 1 } };

        default:
            return state;
    }
}