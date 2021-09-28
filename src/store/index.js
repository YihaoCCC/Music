import { applyMiddleware, createStore, compose } from "redux";
import creducer  from "./reducer";
import thunk from "redux-thunk";




const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
//1参数需要reducer 2参数需要中间件
const store = createStore(creducer,composeEnhancers( 
    applyMiddleware(thunk)
    )
)
export default store