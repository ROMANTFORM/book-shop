import types from "./cart-types";

export const cartReducer = (state = [], action) => {
   switch(action.type){

    case(types.ADD):
        return [...state, action.payload];

    case(types.DELETE):
        return state.filter(item => item.id !== action.payload);

    default: return state
   }
}