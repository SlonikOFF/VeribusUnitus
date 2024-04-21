import './style.css'
import man from '../../../public/human/man.svg'
import { Link } from 'react-router-dom'
function Home() {

  return (

    <div className='home'>
      <img src={man} alt="" />
      <div className='greeting'>

        <div className='greeting-text'>Добро пожаловать!</div>
        <div className='about'>Наше приложение позволит получить доступ к сервисам для студентов ФФ МГУ!</div>
        <div className='info'>Для просмотра расписания введите свою группу:</div>

        <input type="text" placeholder='Введите группу' />

        <Link to="/schedule" className='button'>
          Перейти к расписанию
        </Link>

      </div>
    </div>
  )
}

export default Home
