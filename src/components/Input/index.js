import React from 'react'
import './style.scss'
import {useDispatch} from 'react-redux'
import {changeUserInfo} from '../../store'

function Input(props) {
  
  const {onChange, placeholder, className, name, type} = props

  

  return(
    <input type={type} name={name} placeholder={placeholder} className={className} onChange={(e) => onChange(name, e.target.value)} />
  )
}

export default Input