import { Link } from 'react-router-dom'
import './style.css'
function Header() {

  return (
    <header className='header'>
      <Link to="/">Твой ФФ</Link>
    </header>
  )
}

export default Header
