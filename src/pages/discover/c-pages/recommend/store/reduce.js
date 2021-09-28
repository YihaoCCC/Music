import { ADD_TOP_BANNER, Hot_Recommend, New_Album, Top_New_Ranking, Top_Origin_Ranking, Top_Up_Ranking } from "./contants"
import { Map } from 'immutable'

const defalutBanner = Map({
    topBanner: [],
    hotRecommend: [],
    newAlbum: [],
    upRanking: {},
    newRanking: {},
    originRanking: {}
})

function reducer( state = defalutBanner, action) {
    switch(action.type) {
        case ADD_TOP_BANNER :
            return state.set('topBanner', action.banners)
// return {...state, banner: action.banner}
// 这样每次操作会拷贝state 当state中数据较多时，造成性能浪费,故使用immutable.js 中Map()来进行优化
        case Hot_Recommend :
            return state.set('hotRecommend', action.HotRecommends)   
        case New_Album :
            return state.set('newAlbum', action.newAlbums)  
        case Top_Up_Ranking :
            return state.set('upRanking', action.upRankings)
        case Top_New_Ranking :
            return state.set('newRanking', action.newRankings)
        case Top_Origin_Ranking :
            return state.set('originRanking', action.originRankings)   
        default :
            return state
    }
}


export default reducer