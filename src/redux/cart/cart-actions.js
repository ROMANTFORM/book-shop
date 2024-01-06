import types from "./cart-types";

export const addItemToCart = item => ({
    type: types.ADD,
    payload: item
});

export const deleteItem = itemId => ({
    type: types.DELETE,
    payload: itemId
});