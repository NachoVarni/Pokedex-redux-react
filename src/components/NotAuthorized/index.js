import React from 'react'
import {Link} from 'react-router-dom'
import './style.scss'

function NotAuthorized() {
  return(
    <div className='authorize'>
      <h2>No estas autorizado a ingresar</h2> 
      <Link to='/login'>
        <p>Click aqui para loguearte</p>
      </Link>
    </div>
  )
}

export default NotAuthorized