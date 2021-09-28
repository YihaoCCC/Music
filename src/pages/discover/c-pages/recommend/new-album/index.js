import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import RemThemeHeader from '@/components/theme-header-rem'
import { Carousel } from 'antd';

import { NewAblumContent } from './style'

import { getNewAlbumAction } from '../store/creatActions'
import { shallowEqual } from 'react-redux'

import AblumCoverImg from '@/components/img-ablum'
import { useRef } from 'react';



export default memo(function NewAblum() {


    const pageRef = useRef()

    const newAblums = useSelector(state => {
        return {
            newAblums: state.getIn(['recommend', 'newAlbum'])
        }
    }, shallowEqual)



    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getNewAlbumAction(10))
    }, [dispatch])

    return (
        <>
            <RemThemeHeader title='新碟上架' links={[]} />
            <NewAblumContent>
                <div className='left'>
                    <svg t="1632201779611" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2840"
                        width="16" height="16" fill="#8a8a8a" onClick={ () => pageRef.current.prev()}>
                        <path d="M714.213 923.433c35.398-35.398 35.398-92.79 0-128.188L436.561 517.593l277.652-277.651c35.398-35.398 35.398-92.79 0-128.188s-92.79-35.398-128.188 0L244.28 453.5c-35.398 35.398-35.398 92.79 0 128.188l341.746 341.746c35.398 35.398 92.79 35.398 128.188-0.001z" p-id="2841"></path>
                    </svg>

                </div>
                <Carousel  className='content' dots={false}  ref={pageRef} dontAnimate = {true}>
                    <div className = 'page'>
                        {
                            newAblums.newAblums.slice(0, 5).map((item, index) => {
                                return (
                                    <AblumCoverImg key={index} info={item}
                                    size={100} 
                                    width={118} 
                                    bgp="-570px">
                                        
                                    </AblumCoverImg>
                                    )
                            })
                        }
                    </div>
                    <div className = 'page'>
                        {
                            newAblums.newAblums.slice(4, 9).map((item, index) => {
                                return (
                                    <AblumCoverImg key={index} info={item}
                                    size={100} 
                                    width={118} 
                                    bgp="-570px">
                                        
                                    </AblumCoverImg>
                                    )
                            })
                        }
                    </div>
                </Carousel>
                <div className='right'>
                    <svg t="1632201828314" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                        p-id="3230" width="16" height="16" fill="#8a8a8a" onClick={ () => pageRef.current.next()}>
                        <path d="M331.12 100.567c-35.398 35.398-35.398 92.79 0 128.188l277.652 277.652L331.12 784.058c-35.398 35.398-35.398 92.79 0 128.188s92.79 35.398 128.188 0L801.054 570.5c35.398-35.398 35.398-92.79 0-128.188L459.308 100.566c-35.398-35.398-92.789-35.398-128.188 0.001z" p-id="3231">
                        </path>
                    </svg>
                </div>
            </NewAblumContent>
        </>
    )
})
