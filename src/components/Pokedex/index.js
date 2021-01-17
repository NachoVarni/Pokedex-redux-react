import React, { useEffect, useState } from 'react'
import Input from '../Input'
import Button from '../Button'
import Axios from 'axios'
import './style.scss'

function Pokedex() {

  const [pokeNumber, setPokeNumber] = useState('')
  const [pokemon, setPokemon] = useState('')
  const [pokeImg, setPokeImg] = useState('')

  function handleChange(name, value) {
    setPokeNumber(value)
  }

  // useEffect(() => {
  //   fetchData()
  // }, [])
  
  async function fetchData() { 
    const pokemonNumber = pokeNumber 
    const pokeData = await Axios.get(`https://pokeapi.co/api/v2/pokemon-form/${pokemonNumber}/`)
    console.log(pokeData.data.sprites.front_default)
    setPokeImg(pokeData.data.sprites.front_default)
    setPokemon(pokeData.data.name)
  }
  
  return(
    <div className='pokedex'>
      <h2>Bienvenido a nuestro Pokedex</h2>
      <Input placeholder='Escribir numero de Pokemon' className='pokedexInput' onChange={handleChange} />
      <Button label='Buscar' className='pokedexButton' onClick={() => fetchData()} />
      <p>Has elegido a {pokemon}!</p>
      <img src={pokeImg}  className='pokeImg' />
    </div>
  )
}

export default Pokedex