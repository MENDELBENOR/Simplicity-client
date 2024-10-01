import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout/Layout'



function App() {

  return (
    <>
      <BrowserRouter>
        <Layout />
        <Routes>
          <Route path='/users' />
          <Route path='/about' />
          <Route path='/services' />
          <Route path='/contact' />
          <Route path='/profile' />
          <Route path='/dev' />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App