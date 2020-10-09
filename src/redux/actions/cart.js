import { ADD_PIZZA_CART } from "../actionNames"

export const  addPizzaToCart = (pizzaObj) => ({
    type:  ADD_PIZZA_CART,
    payload: pizzaObj
})