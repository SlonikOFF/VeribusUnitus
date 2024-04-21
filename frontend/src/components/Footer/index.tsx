import './style.css'
// import man from '../../../public/man.svg'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <footer className='footer'>
      <Link to="/schedule">
        <div className='redirect'>
          <img src="" alt="" />
          Расписание
        </div>
      </Link>
      <Link to="/feed">
        <div className='redirect'>
          <img src="" alt="" />
          Лента
        </div>
      </Link>
      <Link to="/profile">
        <div className='redirect'>
          <img src="" alt="" />
          <div>Профиль</div>
        </div>
      </Link>
    </footer>
  )
}

export default Footer
