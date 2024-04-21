import { Link } from 'react-router-dom'
import './style.css'

import { useSelector } from 'react-redux'
import { RootState } from '../../store/redusers/dataSlice'
function Header() {

  const {email} = useSelector((store:RootState) => store.settings)

  return (
    <header className='header'>
      <Link to="/">Твой ФФ</Link>
      <div>{email !== 0 ? email : ""}</div>
    </header>
  )
}

export default Header
