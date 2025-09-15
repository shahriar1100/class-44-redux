
import { Route, Routes } from 'react-router-dom'
import './App.css'
import RootLayout from './components/layouts/RootLayout'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Shop from './components/pages/Shop'
import Contact from './components/pages/Contact'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<RootLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
