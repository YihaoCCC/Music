import { ADD_TOP_BANNER, Hot_Recommend, New_Album, Top_New_Ranking, Top_Origin_Ranking, Top_Up_Ranking } from "./contants"

import { getTopBanner, getHotRemcommend } from "@/services/recommend"
import { getNewAlbum, getTopRanking } from "../../../../../services/recommend"


const initBannerAciton = (res) => {
    return {
        type: ADD_TOP_BANNER,
        banners: res.banners
    }
}
const initHotRecommendAciton = (res) => {
    return {
        type: Hot_Recommend,
        HotRecommends: res.result
    }
}
const initNewAlbumAction = (res) => {
    return {
        type: New_Album,
        newAlbums: res.albums
    }
}

const initUpRankingAction = (res) => {
    return {
        type: Top_Up_Ranking,
        upRankings: res.playlist
    }
}

const initNewRankingAction = (res) => {
    return {
        type: Top_New_Ranking,
        newRankings: res.playlist
    }
}

const initOriginRankingAction = (res) => {
    return {
        type: Top_Origin_Ranking,
        originRankings: res.playlist
    }
}

export const getTopBannerAction = () => {
    return dispatch => {
        getTopBanner().then(res => {
            dispatch(initBannerAciton(res))
        })
    }
}
export const getHotRemcommendAction =(limit) => {
    return dispatch => {
        getHotRemcommend(limit).then(res => {
            dispatch(initHotRecommendAciton(res))
        })
    }
}
export const getNewAlbumAction = (limit) => {
    return dispath => {
        getNewAlbum(limit).then(res => {
            dispath(initNewAlbumAction(res))
        })
    }
}

export const getTopRankingAciton = (ids) => {
    return dispatch => {
        getTopRanking(ids).then ( (res) => {
            if(ids === 3) {
                dispatch(initUpRankingAction(res))
            } else if (ids === 0) {
                dispatch(initNewRankingAction(res))
            } else if(ids === 2) {
                dispatch(initOriginRankingAction(res))
            }
        })
    }
}