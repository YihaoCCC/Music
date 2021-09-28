import React, { memo } from 'react'
import { RankingWrapper } from './style'

export default memo(function YHTopRanking(props) {

    const { info } = props

    // const { tracks = [] } = info

    const tracks = info.tracks || []


    return (
        <RankingWrapper>
            <div className="header">
                <div className="imgBox">
                    <div className="cover"></div>
                    <img src={info.coverImgUrl} alt="" />
                </div>
                <div className="header-left">
                    {info.name}
                    <div className="buttons">
                        <a href="javascript"> </a>
                        <a href="javascript"> </a>
                    </div>
                </div>
            </div>
            {
                tracks.slice(0, 10).map((item, index) => {
                    return <div className='songItem' key={index}>
                        <div className="number" style={{ color: `${index <= 2 ? '#C10D0C' : '#666'}` }}>
                            {index + 1}
                        </div>
                        
                            <span>{item.name}</span>
                            <div className="operate">
                                <button className="play" href='#' > </button>
                                <a className="addto" href='javascript'> </a>
                                <a className="favor" href='jacascript'> </a>
                            </div>
                        </div>
                })
            }
            <div className="songItem" style={{ float: 'right', marginRight: '20px' }} >
                查看全部{'>'}
            </div>

        </RankingWrapper>
    )
})
