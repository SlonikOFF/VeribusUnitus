import './style.css'
import profile from '../../../public/ui/profile.svg'
import Wprofile from '../../../public/ui/whiteProfile.png'

import ras from '../../../public/ui/ras.svg'
import Wras from '../../../public/ui/whiteRas.png'

import len from '../../../public/ui/len.svg'
import Wlen from '../../../public/ui/whiteLen.png'

import { Link, useLocation } from 'react-router-dom'

function Footer() {
  // const { location } = this.props

  const location = useLocation();
  const currentPath = location.pathname

  console.log(currentPath)
  return (
    <footer className='footer'>
      <Link to="/schedule">
        <div className='redirect' style={{ backgroundColor: currentPath === '/schedule' ? '#17A1FA' : '#EFEFEF'}}>
          <img src={currentPath === '/schedule' ? Wras : ras} alt="" />
          <div style={{ color: currentPath === '/schedule' ? '#FFFFFF' : '#08446D'}}>Расписание</div>
        </div>
      </Link>
      <Link to="/feed">
        <div className='redirect' style={{ backgroundColor: currentPath === '/feed' ? '#17A1FA' : '#EFEFEF'}}>
          <img src={currentPath === '/feed' ? Wlen : len} alt="" />
          <div style={{ color: currentPath === '/feed' ? '#FFFFFF' : '#08446D'}}>Лента</div>
        </div>
      </Link>
      <Link to="/profile">
        <div className='redirect' style={{ backgroundColor: currentPath === '/profile' ? '#17A1FA' : '#EFEFEF'}}>
          <img src={currentPath === '/profile' ? Wprofile : profile} alt="" />
          <div style={{ color: currentPath === '/profile' ? '#FFFFFF' : '#08446D'}} >Профиль</div>
        </div>
      </Link>
    </footer>
  )
}

export default Footer
