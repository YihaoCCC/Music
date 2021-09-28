import { Map } from "immutable"
import { ADD_Music_Detail } from "./contants"

const musicState = Map(
    {
        musicDetail: []
    }
) 

function reducer (state = musicState, action) {
    switch(action.type){
        case  ADD_Music_Detail:
            return state.set('musicDetail', action.musicDetail)
        default:
            return state
    }
}

export default reducer


