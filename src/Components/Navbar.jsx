import { Link } from 'react-router-dom'
import { rutes } from '../utils/rutes'
import { useGlobalStates } from '../Contexts/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const {themeState, themeDispatch} = useGlobalStates()

  const changeTheme = () => {
    themeDispatch({type: "toggle", payload: !themeState})  
  }
  console.log(themeState);
  return (
    <nav className={themeState? 'darkNav': ''}>
      <img src={rutes.logo_dh} alt='DH-logo'/>
      <Link to={rutes.home}><h3>Home</h3></Link>
      <Link to={rutes.favs}><h3>Favoritos</h3></Link>
      <Link to={rutes.contact}><h3>Contacto</h3></Link>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button 
        onClick={changeTheme} 
        className= {themeState? 'darkButton': ''}
      >
        {themeState? <img src={rutes.toLight} alt="cambiar tema a oscuro"/> : <img src={rutes.toDark} alt="cambiar tema a claro"/>}
      </button>
    </nav>
  )
}
export default Navbar