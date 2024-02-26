import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import DaisyPreview from './Pages/DaisyPreview.jsx'
import AngelPreview from './Pages/AngelPreview.jsx'
import HorizonPreview from './Pages/HorizonPreview.jsx'
import MacJonesPreview from './Pages/MacJonesPreview.jsx'
import UnfoundPreview from './Pages/UnfoundPreview.jsx'
import Mission from './Pages/Tabs/Mission.jsx'
import About from './Pages/Tabs/About.jsx'
import Homeless from './Pages/Tabs/Homeless.jsx'
import Stroke from './Pages/Tabs/Stroke.jsx'
import Charity from './Pages/Tabs/Charity.jsx'
import Photo from './Pages/Photo.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/daisypreview',
    element: <DaisyPreview />
  },
  {
    path: '/angelpreview',
    element: <AngelPreview />
  },
  {
    path: '/horizonpreview',
    element: <HorizonPreview />
  },
  {
    path: '/macjonespreview',
    element: <MacJonesPreview />
  },
  {
    path: '/unfoundpreview',
    element: <UnfoundPreview />
  },
  {
    path: '/mission',
    element: <Mission />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/homeless',
    element: <Homeless />
  },
  {
    path: '/stroke',
    element: <Stroke />
  },
  {
    path: '/charity',
    element: <Charity />
  },
  {
    path: '/photo',
    element: <Photo />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
