import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom'

import App from '../App'

const router = createBrowserRouter(
  createRoutesFromElements(<Route path='/' element={<App />} />)
)

export default router
