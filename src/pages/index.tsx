import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route
} from 'react-router-dom'

import Matches from './Matches/Matches'
import StartPage from './StartPage/StartPage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Navigate to='/matches' />} />
      <Route path='/info' element={<StartPage />} />
      <Route path='/matches' element={<Matches />} />
    </>
  )
)

export default router
