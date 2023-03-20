import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom'

import Start from './start'

const router = createBrowserRouter(
  createRoutesFromElements(<Route path='/' element={<Start path={'/'} />} />)
)

export default router
