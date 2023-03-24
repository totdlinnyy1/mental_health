import {ComponentType} from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Header from '../widgets/Header/ui/Header/Header'

import Dashboard from './Dashboard/DashBoaed'
import StartPage from './StartPage/StartPage'

const Router: ComponentType = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header />}>
          <Route path='/info' element={<StartPage />} />
          <Route element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
