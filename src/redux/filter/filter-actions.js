import types from "./filter-types";

const changeFilter = value => ({
    type: types.CHANGE_FILTER,
    payload: value
})

export default changeFilter;