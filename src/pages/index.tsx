import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom'

import StartPage from './StartPage/StartPage'

const router = createBrowserRouter(
  createRoutesFromElements(<Route path='/' element={<StartPage />} />)
)

export default router
