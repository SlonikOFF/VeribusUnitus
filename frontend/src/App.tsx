import './App.css'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Registration from './pages/Registration'
import Footer from './components/Footer'
import Schedule from './pages/Schedule'
import Len from './pages/Len'
import Auth from './pages/Auth'
// import Private from './components/PrivateRoute'
import { useSelector } from 'react-redux'
import { RootState } from './store/redusers/dataSlice'
import { useEffect } from 'react'

function App() {

  const {token} = useSelector((store:RootState) => store.settings)
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if(!token && location.pathname !== "/auth" && location.pathname !== "/reg"){
      navigate("/auth");
      console.log("asdas", location.pathname)
    }
  }, [token])

  return (
    <div className='app'>
      <Header/>

      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/reg" element={<Registration/>}/>
        <Route path="/schedule" element={<Schedule/>}/>
        <Route path="/feed" element={<Len/>}/>
        <Route path="/auth" element={<Auth/>}/>

      </Routes>

      <Footer />
    </div>
  )
}

export default App
