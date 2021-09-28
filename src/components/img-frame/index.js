import React, { memo } from 'react'
import {dataFromat} from '@/utils/dataFromat'
import { ImgFrame } from './style'

export default memo(function ImgFrameItem(props) {

    const {info } = props


    return (
        <ImgFrame>
        <div className="imgBox">
            <img src={info.picUrl} alt="" />
            <div className="cover">
                <div className='bottom'>
                    <span className='listen'></span>
                    <span >{dataFromat(info.playCount)}</span>
                    <a href="javascript"> </a>
                </div> 
            </div>   
        </div>
        <div className="title">
            <a href='javascript'>{info.name} </a>
            <div  >{info.creator ? <div className='auth' > <span>by</span> {info.copywriter || info.creator.nickname}</div> : undefined}</div>
            
        </div>
    </ImgFrame>
    )
})
