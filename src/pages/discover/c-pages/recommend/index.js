import React, { memo } from 'react'
import HotRecommend from './hot-recommend'
import NewAlbum from './new-album'
import RemRanking from './rem-ranking'
import { RecommendContent, RecommendWrapper, RContentLeft, RContentRight } from './style'
import TopBanner from './TopBanner'


export default memo(function YHRecommend() {

   

    return (
        <RecommendWrapper>
            {/* 推荐页面轮播图  */}
           <TopBanner/>
           {/* 推荐页面内容 */}
            <RecommendContent className='body-content'>
                {/* 内容左侧 */}
                <RContentLeft>
                    {/* 热门推荐 */}
                    <HotRecommend/>
                    {/* 新碟上架 */}
                    <NewAlbum/>
                    {/* 榜单 */}
                    <RemRanking/>
                </RContentLeft>
                {/* 内容右侧 */}
                <RContentRight>
                    <h2>还没写</h2>
                </RContentRight>
            </RecommendContent>
        </RecommendWrapper>
    )
})
