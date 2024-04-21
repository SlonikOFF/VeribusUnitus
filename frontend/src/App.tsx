import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Registration from './pages/Registration'
import Footer from './components/Footer'
import Schedule from './pages/Schedule'

function App() {

  return (
    <div className='app'>
      <Header/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/reg" element={<Registration/>}/>
        <Route path="/schedule" element={<Schedule/>}/>
      </Routes>

      <Footer />
    </div>
  )
}

export default App
