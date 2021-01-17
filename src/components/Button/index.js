import React from 'react'
import './style.scss'
import {useDispatch} from 'react-redux'
import { changeUserInfo } from '../../store'
import {checkAccess} from '../../store'

function Button(props) {
  
  const {className, label, onClick} = props
  
  return(
    <>
      <button className={className} onClick={onClick}>{label}</button>
    </>
  )
}

export default Button