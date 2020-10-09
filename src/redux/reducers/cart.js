import { ADD_PIZZA_CART } from "../actionNames"

const inintialState = {
    items: {},
    totalPrice: 0, 
    totalCount: 0,
}
const cart = (state = inintialState, action) => {
    switch(action.type){
        case ADD_PIZZA_CART: {
            const newItems = {
                ...state.items,
                [action.payload.id]: !state.items[action.payload.id] 
                    ? [action.payload]
                    : [...state.items[action.payload.id], action.payload]  
            }

            const allPizzas = [].concat.apply([], Object.values(newItems))
            const totalPrice = allPizzas.reduce((sum, obj) =>  obj.price  + sum, 0)
                //Object.values(newItems).reduce((acc, val) => acc.concat(val), []).length
                //[].concat.apply([], Object.values(items)).length
                // Object.values(newItems).flat().length
                // else: Object.keys(newItems).length 
            return{
                ...state, 
                items: newItems,
                totalCount: allPizzas.length,
                totalPrice,
            }
        }
        default: return state
    }
}


export default cart