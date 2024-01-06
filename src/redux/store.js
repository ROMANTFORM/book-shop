import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { counterReducer } from "./counter/counter-reducer";
import { dataReducer } from "./data/data-reducer";
import { cartReducer } from "./cart/cart-reducer";
import { filterReducer } from "./filter/filter-reduser";



const rootReducer = combineReducers({
    value: counterReducer,
    data: dataReducer,
    cart: cartReducer,
    filter: filterReducer
})

const composedEnhancer = composeWithDevTools(  
    applyMiddleware()
  )
  

const store = createStore(rootReducer, composedEnhancer);

export default store;