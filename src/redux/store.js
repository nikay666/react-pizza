import {createStore, compose, applyMiddleware}  from 'redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'


const composeEnhancers  =  (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const store = createStore(
    rootReducer, 
    composeEnhancers(applyMiddleware(thunk))
)
export default store