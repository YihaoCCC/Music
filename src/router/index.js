import { Redirect } from "react-router-dom"

import discover from "../pages/discover"
import friend from "../pages/friend"
import my from "../pages/my"
import recommend from '../pages/discover/c-pages/recommend'
import album from '../pages/discover/c-pages/album'
import artist from '../pages/discover/c-pages/artist'
import songs from '../pages/discover/c-pages/songs'
import djradio from '../pages/discover/c-pages/djradio'
import ranking from '../pages/discover/c-pages/ranking'
const routes = [
    {
        path: '/',
        exact: true,
        render: () => 
            <Redirect  to="/discover"/>
    },
    {
        path: '/discover',
        component: discover,
        routes: [
            {
              path: "/discover",
              exact: true,
              render: () => (
                <Redirect to="/discover/recommend"/>
              )
            },
            {
              path: "/discover/recommend",
              component: recommend
            },
            {
              path: "/discover/ranking",
              component: ranking
            },
            {
              path: "/discover/songs",
              component: songs
            },
            {
              path: "/discover/djradio",
              exact: true,
              component: djradio
            },
            {
              path: "/discover/artist",
              component: artist
            },
            {
              path: "/discover/album",
              component: album
            }
          ]
    },
    {
        path: '/my',
        exact: true,
        component: my
    },
    {
        path: '/friend',
        component: friend
    }
]
export default routes