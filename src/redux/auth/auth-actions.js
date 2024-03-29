import types from "./auth-types";

export const authOn = value => ({
    type: types.AUTHON,
    payload: value
});

export const authOff = value => ({
    type: types.AUTHOFF,
    payload: value
});