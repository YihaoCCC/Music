import React, { memo, useState } from 'react'
import { PlayerWrapper } from './style'

import { Slider } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMucisAciton } from '../store/actionCreate';
import { useRef } from 'react';
import { formatDate } from '../../../utils/dataFromat';

export default memo(function YHMusicPlayer() {
    //Hooks
    const playRef = useRef()

    const [Pause, setPause] = useState(true)
    const [currentTime, setcurrentTime] = useState(0)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMucisAciton(36024806))
    },[dispatch])

    //pageData
    const {theMusic} = useSelector(state => {
        return {
            theMusic: state.getIn(['musicPlay','musicDetail'])
        }
    })
    const imgUrl = (theMusic.al && theMusic.al.picUrl) || ''
    const name =    theMusic.name || ''
    const singer = (theMusic.ar && theMusic.ar[0].name) || '未知歌手'
    const howLongTime = theMusic.dt || 0
    const showTime = formatDate(howLongTime,'mm:ss')
    const showCurrentTime = formatDate(currentTime,'mm:ss')
    const progress = currentTime/howLongTime *100 
    //methods
    const playMusic = (id) => {
        playRef.current.src = `https://music.163.com/song/media/outer/url?id=${id}.mp3`
        playRef.current.play()
        setPause(!Pause)
    }

    const getCurrentTime = (e) => {
        setcurrentTime(e.target.currentTime*1000)

    }

    const handleChange = (e) => {
        console.log(e)
    }
    

    return (
        <PlayerWrapper>
            <div className="content">
                <div className="leftIcons">
                    {/* 上一曲 */}
                    <svg t="1632364165580" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="17792" width="30" height="30">
                        <path d="M904 254.4c49.6 73.6 80 163.2 80 259.2 0 256-208 464-464 464s-464-208-464-464 208-464 464-464c73.6 0 144 17.6 206.4 48" fill="#FFF100" p-id="17793"></path>
                        <path d="M520 1011.2c-273.6 0-496-222.4-496-496s222.4-496 496-496c76.8 0 152 17.6 220.8 51.2 16 8 22.4 27.2 14.4 43.2-8 16-27.2 22.4-43.2 14.4-59.2-30.4-124.8-44.8-192-44.8-238.4 0-432 193.6-432 432s193.6 432 432 432 432-193.6 432-432c0-86.4-25.6-169.6-73.6-241.6-9.6-14.4-6.4-35.2 8-44.8 14.4-9.6 35.2-6.4 44.8 8 56 81.6 84.8 177.6 84.8 278.4 0 273.6-222.4 496-496 496z" fill="" p-id="17794"></path><path d="M812.8 166.4m-48 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0Z" fill="" p-id="17795"></path><path d="M560 310.4L275.2 492.8 560 673.6zM600 310.4h68.8v363.2h-68.8z"
                            fill="" p-id="17796">
                        </path>
                    </svg>
                    {/* 播放按钮 */}
                    <svg onClick={( ) => playMusic(36024806) } t="1632364188376" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="18038" width="42" height="42">
                        <path d="M930.925 518.775c0 210.246-170.428 380.646-380.659 380.646-210.232 0-380.688-170.4-380.688-380.646 0-210.245 170.456-380.659 380.688-380.659 210.231 0 380.659 170.414 380.659 380.659" fill="#F7E946" p-id="18039"></path>
                        <path d="M513.888 73.273c-39.473 0-78.641 5.234-116.4 15.537a28.424 28.424 0 0 0-3.553 1.237c-0.729 0.136-1.458 0.292-2.186 0.487-33.977 9.295-72.846 25.719-103.7 42.872-13.645 7.61-18.562 24.833-10.966 38.478 5.193 9.294 14.806 14.529 24.75 14.529 4.64 0 9.363-1.146 13.728-3.563 26.876-14.957 61.493-29.656 91.104-37.749a28.49 28.49 0 0 0 3.497-1.211 28.407 28.407 0 0 0 2.242-0.499c32.897-8.991 67.039-13.548 101.484-13.548 211.861 0 384.223 172.348 384.223 384.196 0 211.859-172.361 384.223-384.223 384.223-211.834 0-384.168-172.363-384.168-384.223 0-57.358 12.32-112.519 36.6-163.952 6.657-14.115 0.635-30.978-13.507-37.648-14.143-6.671-30.992-0.635-37.648 13.507-27.873 59.029-42.016 122.325-42.016 188.094 0 243.06 197.719 440.792 440.738 440.792 243.046 0 440.793-197.732 440.793-440.792 0.001-243.034-197.746-440.767-440.792-440.767z" fill="#213847" p-id="18040"></path><path d="M167.092 295.079a28.099 28.099 0 0 1-16.491-5.331c-12.678-9.129-15.551-26.794-6.436-39.472a442.718 442.718 0 0 1 68.972-75.574c11.712-10.233 29.666-8.99 39.887 2.804 10.247 11.794 8.977 29.652-2.818 39.9a387.472 387.472 0 0 0-60.133 65.906c-5.524 7.679-14.197 11.767-22.981 11.767zM392.019 696.373a28.196 28.196 0 0 1-13.645-3.509 28.287 28.287 0 0 1-14.64-24.776V359.991a28.288 28.288 0 0 1 14.64-24.777 28.239 28.239 0 0 1 28.754 0.87l243.765 154.063a28.275 28.275 0 0 1 13.176 23.907 28.255 28.255 0 0 1-13.176 23.906L407.128 691.994a28.279 28.279 0 0 1-15.109 4.379z m28.284-285.047v205.425l162.53-102.698-162.53-102.727z"
                            fill="" p-id="18041">
                        </path>
                    </svg>
                    {/* 下一曲 */}
                    <svg t="1632364211704" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="18283" width="30" height="30">
                        <path d="M902.4 251.2c49.6 73.6 80 163.2 80 259.2 0 256-208 464-464 464s-464-208-464-464 208-464 464-464c73.6 0 144 17.6 206.4 48" fill="#FFF100" p-id="18284"></path><path d="M516.8 1008c-273.6 0-496-222.4-496-496s222.4-496 496-496c76.8 0 152 17.6 220.8 51.2 16 8 22.4 27.2 14.4 43.2-8 16-27.2 22.4-43.2 14.4-59.2-30.4-124.8-44.8-192-44.8-238.4 0-432 193.6-432 432s193.6 432 432 432 432-193.6 432-432c0-86.4-25.6-169.6-73.6-241.6-9.6-14.4-6.4-35.2 8-44.8 14.4-9.6 35.2-6.4 44.8 8 56 81.6 84.8 177.6 84.8 278.4 0 273.6-222.4 496-496 496z" fill="" p-id="18285"></path><path d="M481.6 329.6L764.8 512 481.6 692.8zM372.8 329.6h68.8v363.2h-68.8z" fill="" p-id="18286"></path><path d="M827.2 163.2m-48 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0Z" fill="" p-id="18287">
                        </path>
                    </svg>
                </div>
                <div className="playContent">

                    <img src={`${imgUrl}?param=34y34`} alt="" />
                    <div className="slider">
                        <div className="singer">
                            <span>{name}      </span>
                            <svg t="1632367773901" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="28082" width="16" height="16"><path d="M629.333333 629.333333m-352 0a352 352 0 1 0 704 0 352 352 0 1 0-704 0Z" fill="#FFFF00" p-id="28083"></path><path d="M789.333333 896H234.666667a106.666667 106.666667 0 0 1-106.666667-106.666667V234.666667a106.666667 106.666667 0 0 1 106.666667-106.666667h554.666666a106.666667 106.666667 0 0 1 106.666667 106.666667v554.666666a106.666667 106.666667 0 0 1-106.666667 106.666667zM234.666667 213.333333a21.333333 21.333333 0 0 0-21.333334 21.333334v554.666666a21.333333 21.333333 0 0 0 21.333334 21.333334h554.666666a21.333333 21.333333 0 0 0 21.333334-21.333334V234.666667a21.333333 21.333333 0 0 0-21.333334-21.333334z" fill="#4D4D4D" p-id="28084"></path><path d="M419.2 709.76a64 64 0 0 1-64-64V378.24a64 64 0 0 1 96-55.466667L682.666667 456.533333a64 64 0 0 1 0 110.933334l-231.466667 133.76a64 64 0 0 1-32 8.533333z m21.333333-294.4v193.493333L608.213333 512zM661.333333 530.56z" fill="#4D4D4D" p-id="28085">
                                </path></svg>
                            <span>{singer}</span>
                        </div>
                        <div className="play">
                            <Slider defaultValue={30}  tooltipVisible={false} value={progress}></Slider>
                            
                        </div>
                    </div>
                    <div className="time">
                                <span>{showCurrentTime} </span>
                                /
                                <span> {showTime}</span>
                    </div>

                </div>
                <div className="rightIcons">
                    <svg t="1632368657361" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="36849" width="26" height="26">
                        <path d="M544.102 504.883l-25.241-51.149-25.242 51.15a75.264 75.264 0 0 1-56.73 41.215l-56.473 8.192 40.858 39.834c17.766 17.305 25.856 42.24 21.657 66.713l-9.625 56.218 50.483-26.522c21.965-11.52 48.179-11.57 70.144 0l50.483 26.522-9.626-56.218c-4.198-24.473 3.892-49.408 21.658-66.713l40.858-39.783-56.423-8.192a75.446 75.446 0 0 1-56.78-41.267z" fill="#fff100" p-id="36850"></path>
                        <path d="M845.414 260.3H523.366a53.075 53.075 0 0 1-43.57-22.783L421.99 161.28a53.007 53.007 0 0 0-43.57-22.784H192.357c-58.777 0-106.444 47.667-106.444 106.445v538.521c0 58.778 47.667 106.445 106.444 106.445h653.005c58.778 0 106.445-47.667 106.445-106.445V373.76c0.051-58.778-47.616-113.46-106.394-113.46zM728.678 602.215l-50.227 48.948 11.879 69.12c4.864 28.467-6.605 56.73-30.004 73.728-23.398 16.998-53.81 19.2-79.36 5.734l-62.105-32.614-62.106 32.614a75.448 75.448 0 0 1-35.123 8.755c-15.565 0-31.027-4.864-44.237-14.49-23.398-16.998-34.867-45.209-30.003-73.727l11.878-69.12-50.227-48.948c-20.685-20.172-28.006-49.766-19.046-77.26 8.909-27.495 
                        32.256-47.156 60.825-51.303l69.428-10.086 31.027-62.874c12.8-25.907 38.707-42.035 67.584-42.035s54.784 16.077 67.584 41.984l31.027 
                        62.874 69.427 10.086c28.621 4.147 51.917 23.808 60.826 51.302 8.96 27.546 1.638 57.14-19.047 77.312z" fill="#fff100" p-id="36851"></path>
                        <path d="M845.414 260.3H523.366a53.075 53.075 0 0 1-43.57-22.783L421.99 161.28a53.007 53.007 0 0 0-43.57-22.784H192.357c-58.777 0-106.444 47.667-106.444 106.445v538.521c0 58.778 47.667 106.445 106.444 106.445h399.258c204.544-108.134 343.91-322.97 343.91-570.419 0-1.434-0.05-2.867-0.05-4.3-18.842-32-52.071-54.887-90.062-54.887zM728.678 602.215l-50.227 48.948 11.879 69.12c4.864 28.467-6.605 56.73-30.004 73.728-23.398 16.998-53.81 19.2-79.36 5.734l-62.105-32.614-62.106 32.614a75.448 75.448 0 0 1-35.123 8.755c-15.565 0-31.027-4.864-44.237-14.49-23.398-16.998-34.867-45.209-30.003-73.727l11.878-69.12-50.227-48.948c-20.685-20.172-28.006-49.766-19.046-77.26 8.909-27.495 32.256-47.156 
                        60.825-51.303l69.428-10.086 31.027-62.874c12.8-25.907 38.707-42.035 67.584-42.035s54.784 16.077 67.584 41.984l31.027 62.874 69.427 10.086c28.621 4.147 51.917 23.808 60.826 51.302 8.96 27.546 1.638 57.14-19.047 77.312z" fill="#fff100" p-id="36852"></path>
                        <path d="M479.795 237.517L421.99 161.28a53.007 53.007 0 0 0-43.57-22.784H192.357c-58.777 0-106.444 47.667-106.444 106.445v489.728c9.37 0.41 18.841 0.665 28.313 0.665 84.224 0 164.66-16.179 238.439-45.516l6.656-38.656-50.228-48.948c-20.684-20.172-28.006-49.766-19.046-77.26 8.909-27.495 32.256-47.156 60.826-51.303l69.427-10.086 31.027-62.874c12.8-25.907 38.707-42.035 67.584-42.035s54.784 16.077 67.584 41.984l31.027 62.874 20.634 3.02a642.35 642.35 0 0 0 98.355-206.233H523.418c-17.408 0-33.69-8.5-43.623-22.784z" fill="#fff100" p-id="36853"></path>
                        <path d="M544.102 504.883l-25.241-51.149-25.242 51.15a75.264 75.264 0 0 1-56.73 41.215l-56.473 8.192 40.858 39.834a75.162 75.162 0 0 1 22.579 50.688 646.13 646.13 0 0 0 133.939-106.087c-14.387-7.27-26.317-18.944-33.69-33.843z" fill="#fff100" p-id="36854"></path>
                        <path d="M478.106 235.315L421.99 161.28a53.007 53.007 0 0 0-43.57-22.784H192.357c-58.777 0-106.444 47.667-106.444 106.445v248.217c161.126-33.996 300.032-128.102 392.192-257.843z" fill="#fff100" p-id="36855">
                        </path>
                    </svg>
                    <svg t="1632368773076" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="39375" width="26" height="26">
                        <path d="M902.4 291.2L692.2 128.7c-44-34-107.9-2.6-107.9 53v45c-188.9 1.3-341.9 159.8-341.9 356 0 42.7 7.1 80.7 19 118.7C308.8 563.7 434.7 464 584.2 464v42.7c0 55.6 63.9 87 107.9 53l210.3-162.5c34.7-26.8 34.7-79.2 0-106z" fill="#fff100" p-id="39376"></path>
                        <path d="M768.3 901.9H257.7c-93.1 0-168.5-75.5-168.5-168.5V353.6c0-93.1 75.5-168.5 168.5-168.5h49.6c26.6 0 48.1 21.5 48.1 48.1s-21.5 48.1-48.1 48.1h-49.6c-40 0-72.4 32.4-72.4 72.4v379.8c0 40 32.4 72.4 72.4 72.4h510.5c40 0 72.4-32.4 72.4-72.4v-132c0-26.6 21.5-48.1 48.1-48.1s48.1 21.5 48.1 48.1v132c0 93-75.5 168.4-168.5 168.4z" fill="#fff100" p-id="39377">
                        </path>
                    </svg>
                    <span> | </span>
                    <svg t="1632368865555" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="42005" width="26" height="26">
                        <path d="M242.58 633.51l326.18 248.44-63.09-677.23-263.09 185.76-146.82-63.96v349.94" fill="#fff100" p-id="42006"></path>
                        <path d="M681.25 585.54c-17.43 0-31.56 14.32-31.56 31.98 0 17.67 14.13 31.99 31.56 31.99 74.92 0 135.63-61.55 135.63-137.51 0-75.94-60.71-137.5-135.63-137.5-17.43 0-31.56 14.31-31.56 31.98 0 17.66 14.13 31.98 31.56 31.98 40.07 0 72.53 32.92 72.53 73.54 0 40.63-32.45 73.54-72.53 73.54zM954.93 459.3c-1.74-8.55-3.84-16.9-6.35-25.06-2.5-8.17-5.42-16.19-8.67-24.05a269.92 269.92 0 0 
                        0-10.9-22.91c-3.91-7.33-8.23-14.53-12.91-21.55a255.12 255.12 0 0 0-14.87-20.15 256.195 256.195 0 0 0-16.66-18.57 254.712 254.712 0 0 0-18.28-16.85c-6.33-5.29-12.95-10.29-19.79-15.01-7-4.76-14.05-9.12-21.3-13.11-7.25-4-14.76-7.67-22.52-11.02-7.82-3.35-15.73-6.29-23.77-8.82-8.28-2.59-16.48-4.72-24.74-6.44-17.07-3.56-33.75 7.58-37.25 24.88s7.48 34.21 24.55 37.77c6.26 1.31 12.52 2.93 18.78 4.89 5.96 1.89 11.94 4.1 17.81 6.61 5.83 2.52 11.52 5.3 16.98 8.31 5.51 3.04 10.89 6.35 16.16 9.94a203.66 203.66 0 0 1 14.99 11.37c4.79 3.99 9.38 8.23 13.76 12.69 4.49 4.53 8.67 9.19 12.62 14.05 4 4.91 7.74 9.98 11.24 15.24 3.54 5.31 6.8 10.72 9.75 16.26 3 5.59 5.74 11.36 8.27 17.37 2.44 5.86 4.63 11.92 6.51 18.08 1.89 6.11 3.49 
                        12.43 4.8 18.93 1.31 6.51 2.3 13.01 2.93 19.51 0.68 6.76 1.04 13.54 1.04 20.31 0 6.79-0.36 13.53-1.03 20.22-0.64 6.61-1.63 13.13-2.94 19.6-1.33 6.53-2.91 12.82-4.8 18.93-1.88 6.17-4.08 12.22-6.54 18.16-2.5 5.93-5.24 11.7-8.21 17.22-3.02 5.67-6.27 11.09-9.73 16.26a192 192 0 0 1-11.24 15.24c-3.99 4.92-8.17 9.58-12.57 14.02-4.47 4.55-9.07 8.79-13.86 12.79a194 194 0 0 1-15.03 11.4c-5.22 3.58-10.59 6.87-16.11 9.92-5.58 3.06-11.27 5.84-16.98 8.3-5.87 2.5-11.85 4.72-17.92 6.64-6.17 1.94-12.38 3.57-18.59 4.84-17.07 3.51-28.11 20.39-24.65 37.7 3.46 17.32 20.11 28.49 37.19 24.99 8.32-1.72 16.58-3.86 24.79-6.45 8.07-2.55 15.98-5.49 23.72-8.8 7.61-3.26 15.12-6.93 22.53-10.99 7.37-4.07 14.46-8.44 21.34-13.15 6.85-4.69 13.5-9.73
                         19.86-15.07 6.35-5.29 12.47-10.94 18.32-16.89 5.79-5.83 11.35-12.06 16.62-18.53 5.23-6.4 10.2-13.14 14.84-20.12 4.61-6.89 8.95-14.14 12.93-21.61 3.91-7.28 7.54-14.9 10.83-22.76 3.3-7.93 6.21-15.95 8.7-24.1 2.52-8.17 4.62-16.52 6.36-25.09 1.75-8.6 3.06-17.31 3.93-26.05 0.88-8.77 1.33-17.67 1.33-26.65 0-8.95-0.45-17.89-1.34-26.72a264.56 264.56 0 0 0-3.93-25.92zM505.67 204.72v614.57L261.1 639.6c-0.13-0.1-0.27-0.17-0.4-0.26-0.51-0.36-1.03-0.7-1.56-1.03-0.36-0.23-0.73-0.47-1.1-0.68-0.52-0.29-1.05-0.56-1.58-0.83-0.41-0.2-0.81-0.41-1.22-0.59-0.5-0.23-1.02-0.42-1.52-0.62-0.47-0.17-0.93-0.36-1.4-0.51-0.47-0.16-0.95-0.28-1.43-0.41-0.53-0.14-1.06-0.3-1.58-0.41-0.45-0.1-0.89-0.17-1.34-0.25-0.59-0.1-1.17-0.21-1.76-0.27-0.42-0.05-0.85-0.07-1.28-0.1-0.62-0.06-1.24-0.08-1.86-0.1-0.16-0.01-0.31-0.03-0.48-0.03H127.3V390.48h115.28c6.65 0 13.13-2.13 18.51-6.09l244.58-179.67zM232.35 697.47L518.7 907.85c20.86 15.32 50.06 0.22 50.06-25.9V142.04c0-26.11-29.2-41.21-50.06-25.89L232.35 
                         326.52H95.76c-17.43 0-31.55 14.31-31.55 31.98v306.99c0 17.67 14.12 31.98 31.55 31.98h136.59z m0 0" fill="#333" p-id="42007"></path>
                    </svg>
                    <svg t="1632369112149" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="49846" width="24" height="24">
                        <path d="M50 498.2c27.6 0 50-22.4 50-50v-24.8c0-60.7 49.3-110 110-110h638c1 0 2 0 2.9 0.1L725.4 438.9c-19.5 19.5-19.5 51.2 0 70.7s51.2 19.5 70.7 0l212.1-212.1c19.5-19.5 19.5-51.2 0-70.7L796.1 14.6c-19.5-19.5-51.2-19.5-70.7 0s-19.5 51.2 0 70.7l128.1 128.1c-1.8-0.1-3.7-0.1-5.5-0.1H210c-115.8 0-210 94.2-210 210v24.8c0 27.7 22.4 50.1 50 50.1z" fill="#fff100" p-id="49847"></path>
                    <path d="M974 526c-27.6 0-50 22.4-50 50v25.8c0 60.7-49.3 110-110 110H176c-1.7 0-3.4-0.1-5.1-0.2L297.5 585c19.5-19.5 19.5-51.2 0-70.7s-51.2-19.5-70.7 0L14.6 726.5c-19.5 19.5-19.5 51.2 0 70.7l212.1 212.1c19.5 19.5 51.2 19.5 70.7 0s19.5-51.2 0-70.7L170.6 811.8c1.8 0.1 3.6 0.1 5.4 0.1h638c115.8 0 210-94.2 210-210V576c0-27.6-22.4-50-50-50z" fill="#fff100" p-id="49848"></path></svg>
                    <svg t="1632369215181" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="53089" width="24" height="24"><path d="M51.2 330.752c-25.6 0-46.08-22.016-46.08-49.152s20.48-49.152 46.08-49.152h550.4c25.6 0 46.08 22.016 46.08 49.152s-20.48 49.152-46.08 49.152H51.2zM51.2 552.448c-25.6 0-46.08-22.016-46.08-49.152s20.48-49.152 46.08-49.152h550.4c25.6 0 46.08 22.016 46.08 49.152s-20.48 49.152-46.08 49.152H51.2zM329.216 696.32c26.112 0 47.104 20.48 47.104 46.08s-20.992 46.08-47.104 46.08H51.712c-26.112 0-47.104-20.48-47.104-46.08s20.992-46.08 47.104-46.08h277.504z" fill="#fff100" p-id="53090"></path><path d="M973.312 53.248c25.6 0 46.08 20.48 46.08 46.08s-20.992 46.08-46.08 46.08h-139.776v670.208c0 86.016-70.144 155.648-156.672 155.648h-58.368c-86.528 0-156.672-69.632-156.672-155.648 0-86.016 70.144-155.648 156.672-155.648h58.368c22.528 0 44.544 5.12 64 13.824V99.328c0-25.6 20.992-46.08 46.08-46.08h186.368z" fill="#fff100" p-id="53091"></path></svg>
                </div>
            </div>
            <audio ref={playRef} onTimeUpdate={getCurrentTime}/>
        </PlayerWrapper>
    )
})