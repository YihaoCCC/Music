import yhrequest from "./YHrequest";

export function  getMusic(ids) {
    return yhrequest ({
        url: '/song/detail',
        params: {
            ids: ids
        }
    })
}