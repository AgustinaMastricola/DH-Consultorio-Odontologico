import { Link } from 'react-router-dom'
import { rutes } from "../utils/rutes";
import { useGlobalStates } from '../Contexts/global.context';
import '../css/Card.css'

const Card = ({name, username, id}) => {
  const {favsState, favsDispatch} = useGlobalStates()
  const {themeState} = useGlobalStates()

  const isAdded = favsState.find( fav => fav.id === id)

  const addFav = e => {
    e.stopPropagation()
    if (isAdded){
      favsDispatch({type: "deleteFavs", payload: id})
    }else{
      favsDispatch({type: "addFavs", payload: { name, username, id}})    
    }
  } 

  return (
      <div className={themeState? 'card darkCard': 'card'}>
        <Link to={`/dentista/${id}`} >
          <img className="img_card"src={rutes.img_doctor} alt="Imagen usuario" />
        </Link>
        <p>{name}</p>
        <p>{username}</p> 
        <button 
          onClick={addFav} 
          className= {themeState? 'darkButton': ''}
        >
          {isAdded ? <img src={rutes.favorito} alt="boton eliminar favorito"/> : <img src={rutes.noFavorito} alt="boton Agregar Favorito"/>}
        </button>
      </div> 
  );
};
export default Card;