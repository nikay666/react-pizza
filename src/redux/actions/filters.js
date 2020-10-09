const { SET_SORT_BY, SET_CATEGORY, } = require("../actionNames");

export const setSortBy = ({type, order}) => ({
    type: SET_SORT_BY,
    payload: {type, order}
})

export const setCategory = (index) =>  ({
    type: SET_CATEGORY,
    payload: index
})