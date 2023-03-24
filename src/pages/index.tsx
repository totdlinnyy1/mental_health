import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom'

import Dashboard from './Dashboard/DashBoaed'
import StartPage from './StartPage/StartPage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Dashboard />} />
      <Route path='/info' element={<StartPage />} />
    </>
  )
)

export default router
