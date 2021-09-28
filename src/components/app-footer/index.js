import React, { memo } from 'react'
import { FooterWrapper } from './style'

import { footerLinks,footerImages } from '../../commen/local-data'


export default memo(function YHAppFooter() {
    return (
        <FooterWrapper className='body-content'>
            <div className="footerLeft">
                {
                    footerLinks.map((item,index) => {
                        return <a className='linkItem' key={index} rel="noreferrer" href={item.link}>{item.title}</a>
                    })
                }
                <div className="footerTitle">
                    <span > 网易公司版权所有©1997-2021杭州乐读科技有限公司</span>
                    <span style={{marginLeft:"10px"}}>运营：浙网文[2021] 1186-054号</span>
                   <div style={{marginTop:'10px'}}>
                   <span>违法和不良信息举报电话：0571-89853516</span>
                    <span style={{marginLeft:"10px"}}> 举报邮箱：ncm5990@163.com </span>
                   </div>
                </div>
                <div className='police'>
                    <a target='_blank' rel="noreferrer" href='https://beian.miit.gov.cn/#/Integrated/index'>
                        粤B2-20090191-18  工业和信息化部备案管理系统网站  
                    </a>
                    <img style={{width:'16px',height:'16px'}} src="https://s2.music.126.net/style/web2/img/3rd/police.png?5ed4e65cfed89bde9dc589ab4c9b3a0f" alt="" />
                    <a target='_blank' rel="noreferrer" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010902002564">
                        浙公网安备 33010902002564号  </a>
                </div>
                
                
            </div>
            <div className="footerRight">
               <ul>
                {
                        footerImages.map( (item,index) => {
                            return (
                                <a key={index} className='footerImage' target='_blank' rel="noreferrer" href={item.link}>
                                    
                                </a>
                            )
                        })
                    }
               </ul>
               
            </div>
        </FooterWrapper>
    )
})
