import './style.css'
import man_pro from '../../../public/man_profile.svg'

function Registration() {

  return (
    <div className='reg'>
      <div className='inputReg'>
      <img src={man_pro} alt="" />
      <div className='greeting'>
        <div className='greeting-text'>Регистрация</div>

        <input type="text" placeholder='Введите почту'/>
        <input type="password" placeholder='Введите пароль'/>
        <input type="password" placeholder='Повторите пароль'/>

        <div className='button'>Зарегистрироваться</div>

        <div className='haveProfile'>
          <div>
            <span className='haveProfile-text'>Уже есть профиль?&#x20;</span>
            <span className='haveProfile-button'>Войти</span>
          </div>
          <div>
            При регистрации и входе вы соглашаетесь с политикой обработки данных
          </div>
        </div>
       </div>
       
      </div>
    </div>
  )
}

export default Registration
