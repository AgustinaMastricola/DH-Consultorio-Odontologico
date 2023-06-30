import { Link } from 'react-router-dom'
import { rutes } from "../utils/rutes";
import { useGlobalStates } from '../Contexts/global.context';
import '../css/Card.css'

const Card = ({name, username, id}) => {
  const {favsDispatch} = useGlobalStates()
  const {themeState} = useGlobalStates()

  const onAddFav = e => {
    e.stopPropagation()
    favsDispatch({type: "addFavs", payload: { name, username, id}})    
  } 

  return (
      <div className={themeState? 'card darkCard': 'card'}>
        <Link to={`/dentista/${id}`} >
          <img className="img_card"src={rutes.img_doctor} alt="Imagen usuario" />
        </Link>
        <p>{name}</p>
        <p>{username}</p> 
        <button onClick={onAddFav} className= {themeState? 'darkButton': ''}>Agregar a favoritos</button>
      </div> 
  );
};
export default Card;