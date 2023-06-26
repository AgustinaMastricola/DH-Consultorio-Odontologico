import React from 'react'
import { Link } from 'react-router-dom'
import { rutes } from './utils/rutes'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (
    <nav>
      <Link to={rutes.home}><h1>Home</h1></Link>
      <Link to={rutes.favs}><h1>Favoritos</h1></Link>
      <Link to={rutes.contact}><h1>Contacto</h1></Link>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button className="themeButton">Change theme</button>
    </nav>
  )
}

export default Navbar