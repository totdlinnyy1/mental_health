import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom'

import Dashboard from 'src/pages/Dashboard/Dashboard'
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
