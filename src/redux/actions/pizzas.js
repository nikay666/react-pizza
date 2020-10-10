import axios from "axios";

const { SET_PIZZAS, SET_LOADED, } = require("../actionNames");

export const setLoaded = payload => ({
    type: SET_LOADED,
    payload
})

export const setPizzas = (items) => ({
    type: SET_PIZZAS,
    payload: items
})

export const fetchPizzas = (sortBy, category) => (dispatch) => {
    dispatch(setLoaded(false))
    console.log(sortBy)
    axios.get(`/pizzas?${
            category !== null ? `category=${category}`: ''
        }&_sort=${sortBy.type}&_order=${sortBy.order}`)

        .then(({data}) => {
            dispatch(setPizzas(data)
        )
    })
}

