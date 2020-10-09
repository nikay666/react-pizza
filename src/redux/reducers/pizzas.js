import { SET_PIZZAS, SET_LOADED } from "../actionNames"

const inintialState = {
    items: [],
    isLoaded: false
}
const pizzas = (state = inintialState, action) => {
    switch(action.type){
        case SET_PIZZAS: 
            return{
                ...state, 
                items: action.payload,
                isLoaded: true,
            }
        case SET_LOADED: 
            return{
                ...state, 
                isLoaded: action.payload,
            }
        default: return state
    }
}


export default  pizzas