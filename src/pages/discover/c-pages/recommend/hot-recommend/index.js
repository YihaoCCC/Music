import React, { memo, useEffect } from 'react'
import {shallowEqual, useDispatch, useSelector } from 'react-redux'
import RemThemeHeader from '@/components/theme-header-rem'
import ImgFramItem from '@/components/img-frame'
import { HotRemContent } from './style'
import { getHotRemcommendAction } from '../store/creatActions'

export default memo(function HotRecommend() {

    const {hotRecommends} = useSelector(state => ({
        hotRecommends: state.getIn(['recommend','hotRecommend'])
    }),shallowEqual)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getHotRemcommendAction(8))
    },[dispatch])

    return (
        <>
            <RemThemeHeader title='热门推荐' links={[{title:'华语'},{title:'流行'},{title:'摇滚'},{title:'音乐'},{title:'电子'}]}/>
            <HotRemContent>
                {
                    hotRecommends.map((item,index) => {
                        return <ImgFramItem key={index} info={item} >

                        </ImgFramItem>
                    })
                }
            </HotRemContent>
        </>
    )
})
