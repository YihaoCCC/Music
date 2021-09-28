import React, { memo, useEffect, useCallback, useState } from 'react'
import { Carousel } from 'antd';
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getTopBannerAction } from '../store/creatActions'
import { BannerLeft, BannerRight, BgImg, TopBannerWrapper } from './style'
import 'antd/dist/antd.css';

export default memo(function RecommendTopBanner() {
    const [currentImg, setCurrentImg] = useState(0)
    
    // 使用redux中的数据
    const topBanners = useSelector(state => ({
        // topBanners: state.get('recommendBanner').get('banner') //immutable.js 语法
        topBanners: state.getIn(['recommend', 'topBanner'])//等同于上面一行代码
    }), shallowEqual) //进行浅层比较


    //组件和redux关联：获取数据进行操作
    const dispatch = useDispatch()
    //发送网络请求
    useEffect(() => {
        dispatch(getTopBannerAction())
    }, [dispatch])


    const imgChange =useCallback( function (from, to ) {
        setCurrentImg(to)
    },[])

    // 获取背景图
    const baImg =topBanners.topBanners[currentImg] && topBanners.topBanners[currentImg].imageUrl + '?imageView&blur=40x20'
    return (
        <BgImg bgImage = {baImg} >
            <TopBannerWrapper className='body-content'>
                <BannerLeft>
                    <Carousel effect="fade" autoplay beforeChange={imgChange} >
                        {
                            topBanners.topBanners.map( (item, index) => {
                                return <div key={index}>
                                    <img src={item.imageUrl} alt="" />
                                </div>
                            })
                        }
                    </Carousel>
                </BannerLeft>
                <BannerRight />
                
            </TopBannerWrapper >
        </BgImg>
    )
})
