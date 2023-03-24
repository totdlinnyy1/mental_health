import {ComponentType} from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Dashboard from './Dashboard/DashBoaed'
import StartPage from './StartPage/StartPage'

const Router: ComponentType = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/info' element={<StartPage />} />
        <Route path='/' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
