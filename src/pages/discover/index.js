import React, { memo } from 'react'
import{
    DiscoverWrapper,
    MenuItem,
    TopMenu
}
from './style'


import { discoverMenu } from '../../commen/local-data'
import { renderRoutes } from 'react-router-config'
import { NavLink } from 'react-router-dom'
export default memo(function YHDiscover(props) {
    return (
        <DiscoverWrapper>
                    <TopMenu>
                        <div className="body-content">
                            <MenuItem>
                                {
                                    discoverMenu.map( (item,index) => {
                                        return <NavLink className='discoverTopItem' to={item.link} key={index}>
                                            <span>{item.title}</span>
                                        </NavLink>
                                    })
                                }
                            </MenuItem>
                        </div>
                    </TopMenu>
                  
                    {renderRoutes(props.route.routes)}
                    
                
          </DiscoverWrapper> 
         
    )
})
