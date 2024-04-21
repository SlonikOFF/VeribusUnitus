import './style.css'
import man_pro from '../../../public/human/man_profile.svg'
import { useState } from 'react'
import { loginUserByEmail } from '../../http/API'
import { useDispatch, useSelector } from 'react-redux'
import {  setEmail, setToken } from '../../store/redusers/dataSlice'
import { useNavigate } from 'react-router-dom'

function Auth() {
  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")
  // const [checkPassword, setCheckPassword] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate();
    // const {token} = useSelector((store:RootState) => store.settings)
  const loginCheck = async () => {

    const res = await loginUserByEmail(login, password)
    console.log(res)
    if(res){
      
      dispatch(setToken(res.token))
      dispatch(setEmail(login))

      navigate("/schedule");
    }

  }
  
  return (
    <div className='reg'>
      <div className='inputReg'>
      <img src={man_pro} alt="" />
      <div className='greeting'>
        <div className='greeting-text'>Вход</div>

        <input onChange={e => setLogin(e.target.value)} type="text" placeholder='Введите почту'/>
        <input onChange={e => setPassword(e.target.value)} type="password" placeholder='Введите пароль'/>
        {/* <input onChange={e => setCheckPassword(e.target.value)} type="password" placeholder='Повторите пароль'/> */}

        <div onClick={loginCheck} className='button'>Зарегистрироваться</div>

        <div className='haveProfile'>
          <div>
            <span className='haveProfile-text'>Еще нет профиля?&#x20;</span>
            <span className='haveProfile-button'>ЗАРЕГИСТРИРУЙТЕСЬ</span>
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

export default Auth

