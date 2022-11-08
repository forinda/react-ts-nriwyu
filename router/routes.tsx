import {IRouteProps} from 'react-router-map/dist/types'
import Dashboard from '../pages/Dashboard'
import Homepage from '../pages/Homepage'
import * as React from 'react'
import Dash from '../pages/Dash'
import DashboarUsers from '../pages/DashBoardUsers'
import Admins from '../pages/Admins'
import Parents from '../pages/Parents'

export const routes:IRouteProps[]=[
  {
    Component: <Homepage />,
    hasChildren: false,
    pathName: 'Homepage',
    urlPath: '/',
  },
  {
    Component: <Dashboard />,
    hasChildren: true,
    pathName: 'Admin',
    urlPath: '/admin',
    nestedComponents: [
      {
        Component: <Dash />,
        hasChildren: false,
        pathName: 'Users',
        urlPath: '/admin',
      },
      {
        Component: <DashboarUsers />,
        hasChildren: true,
        pathName: 'Users',
        urlPath: '/admin/users',
        nestedComponents: [
          {
            Component: <Admins/>,
            hasChildren: false,
            pathName: 'Admin users',
            urlPath: '/admin/users',
          },
          {
            Component: <Parents />,
            hasChildren: false,
            pathName: 'Admin users',
            urlPath: '/admin/users/parents',
          },
        ],
      },
    ],
  },
]