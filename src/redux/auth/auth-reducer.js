import types from "./auth-types";

export const authReducer = (state = false, action) => {
    switch(action.type){
        case types.AUTHON:
            return state = true;

        case types.AUTHOFF:
            return state = false;

        default: return state;
    }
};