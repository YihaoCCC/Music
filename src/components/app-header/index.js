import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { HeaderWrapper } from './style'
import { headerLinks } from '../../commen/local-data'
import {message} from 'antd'

export default memo(function YHAppHeader() {
    // 业务逻辑代码
    const showSelectItem = (item,index) =>{
        if(index <3) {
            return (
                <NavLink   to={item.link} >{item.title}
                <i className="sprite_01 icon"></i>
                </NavLink>

            )
        }
        else {
            return <a  rel="noreferrer"target='_blank' href={item.link}>{item.title}</a>
        }
    }

    // 返回jsx
    return (
        <HeaderWrapper>
            <div className="headerContent">
                <div className="content header-content-wrapper">
                    <div className="headerLeft">
                        <a className="logo sprite_01" href='#/'>{ }</a>
                        
                            {
                                headerLinks.map( (item, index) => {
                                    return (
                                        <div key={index} className='selectItem' >
                                            {showSelectItem(item,index)}
                                        </div>
                                    )
                                })
                            }
                        
                    </div>
                    <div className="headerRight">
                        <div className="searchInput">
                        <svg t="1631602517512" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" 
                        p-id="2940" width="26" height="26">
                            <path d="M406.016 598.016q80 0 136.021333-56.021333t56.021333-136.021333-56.021333-136.021333-136.021333-56.021333-136.021333 56.021333-56.021333 136.021333 56.021333 136.021333 136.021333 56.021333zM662.016 598.016l212.010667 212.010667-64 64-212.010667-212.010667 0-34.005333-11.989333-11.989333q-75.989333 66.005333-180.010667 66.005333-116.010667 0-196.992-80t-80.981333-196.010667 80.981333-196.992 196.992-80.981333 196.010667 80.981333 80 196.992q0 104.021333-66.005333 180.010667l11.989333 11.989333 34.005333 0z" 
                        p-id="2941" fill='#666  '></path></svg>
                            <input type="text" placeholder='codeBy奕豪' />
                        </div>
                        <div className="productor"onClick={() => {message.info('别慌，还没写');}} >
                            <span >创作者中心</span>
                        </div>
                        <div className="login">
                            <span  style={{'fontSize': '13px','color':'#ccc','cursor': 'pointer'}} onClick={() => {message.warning('太懒了，登陆还没写呢');}}>登陆</span>
                        </div>
                    </div>
                </div>

            </div>
            <div className="headerFooter">

            </div>

        </HeaderWrapper>
    )
})
