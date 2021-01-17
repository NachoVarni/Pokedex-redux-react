import React from 'react'
import NotAuthorized from '../../components/NotAuthorized'
import Pokedex from '../../components/Pokedex'
import {connect} from 'react-redux'
import './style.scss'

function Home(props) {
  
  
  
  return(
    <div className='home'>
      
      {(props.authorized == false) && <NotAuthorized />}
      
      <div className='authorized'>
        {(props.authorized) && <Pokedex />}
        {(props.authorized) && <p className='username'>{props.user}</p>}
      </div>
    
    </div>
  )
}

function mapStateToProps(state) {
  console.log(state)
  return {
    authorized: state.pokeLogin.isAuthorized,
    user: state.pokeLogin.userInfo.usuario
  }
}

export default connect(mapStateToProps)(Home)