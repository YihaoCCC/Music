import { getMusic } from "../../../services/musicPlay"
import { ADD_Music_Detail } from "./contants"


const initMusicDetailAction = (res) => {
    console.log(res.songs[0])
    return {
        type: ADD_Music_Detail,
        musicDetail: res.songs[0]
    }
}

export const getMucisAciton = (ids) => {
    return dispatch => {
        getMusic(ids).then(res => {
            dispatch(initMusicDetailAction(res))
        })
    }
}