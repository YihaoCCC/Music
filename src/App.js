// 第三方库
import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config'
import { HashRouter } from 'react-router-dom'

// 工具类
import routers from './router'
import store from './store'
// 导入组件
import YHAppHeader from './components/app-header'
import YHAppFooter from './components/app-footer'
import { Provider } from 'react-redux'
import YHMusicPlayer from './pages/music/playerBar'




export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <YHAppHeader></YHAppHeader>

         {renderRoutes(routers)}
        
       
        <div style={{ borderTop: '1px solid #d3d3d3' , background: '#f2f2f2' }}>
          <YHAppFooter></YHAppFooter>
        </div>
        <YHMusicPlayer></YHMusicPlayer>
      </HashRouter>
    </Provider>


  )
})

