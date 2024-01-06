import types from './counter-types';

export const counterReducer = (state = 1, action) => {
    switch(action.type){

        case types.INCREMENT:
            return state + action.payload;

        case types.DECREMENT:
            return state > 1 ? state - action.payload : state;
            
        default: return state
       }
};