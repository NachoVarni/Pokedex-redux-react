import React, { useState } from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button'
import {connect, useDispatch} from 'react-redux'
import {changeUserInfo, checkAccess} from '../../store'
import {useHistory} from 'react-router-dom'
import './style.scss'

function Login(props) {
  
  const [userData, setUserData] = useState({})
  const dispatch = useDispatch()
  const history = useHistory()

  function handleChange(name, value) {
    setUserData({
      ...userData,
      [name]: value
    })
  }

  function handleClick() {
    const correctUser = 'Ash Ketchup';
    const correctPassword = 'pikachu'
    const {usuario, contraseña} = userData
    
    console.log(userData)

    if (usuario == correctUser && contraseña == correctPassword) {
      dispatch(changeUserInfo(userData))
      history.push('/')
      
    }
    else {
      console.log('error')
    }
  }
  
  return(
    <div className='loginForm'>
      <h2>Usuario</h2>
      <Input type='text' name='usuario' placeholder='user is Ash Ketchup' onChange={handleChange} />
      <h2>Contraseña</h2>
      <Input type='text' name='contraseña' placeholder='password is pikachu' onChange={handleChange} />
      <Button label='Buscar' className='loginButton' onClick={handleClick} />
    </div>
  )
}

function mapStateToProps(state) {
  
  return {
    authorized: state.pokeLogin.isAuthorized
  }
}


export default connect(mapStateToProps)(Login)