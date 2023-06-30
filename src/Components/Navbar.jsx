import { Link } from 'react-router-dom'
import { rutes } from '../utils/rutes'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (
    <nav className="">
      <img src={rutes.logo_dh} alt='DH-logo'/>
      <Link to={rutes.home}><h3>Home</h3></Link>
      <Link to={rutes.favs}><h3>Favoritos</h3></Link>
      <Link to={rutes.contact}><h3>Contacto</h3></Link>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button className="themeButton">Cambiar tema</button>
    </nav>
  )
}
export default Navbar