import { combineReducers } from "redux-immutable";
//合并reducer   
import reducer from '../pages/discover/c-pages/recommend/store'
import musicReducer from '../pages/music/store'


const creducer = combineReducers({
    recommend: reducer,
    musicPlay : musicReducer
})

export default creducer