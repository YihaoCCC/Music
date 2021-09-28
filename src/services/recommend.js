import yhrequest from "./YHrequest";

export function getTopBanner() {
    return yhrequest({
        url: '/banner'
    })
} 

export function getHotRemcommend(limit) {
    return yhrequest({
        url: '/personalized',
        params:{
            limit: limit
        }
    })
}

export function getNewAlbum(limit) {
    return yhrequest ({
        url: '/top/album',
        params: {
            limit: limit
        }
    })
}

export function getTopRanking(idx) {
    return yhrequest ({
        url: '/top/list',
        params: {
            idx:idx
        }
    })
}

