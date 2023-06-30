import { Link } from 'react-router-dom'
import { rutes } from "../utils/rutes";
import { useGlobalStates } from '../Contexts/global.context';
import '../css/Card.css'

const Card = ({name, username, id}) => {
  const {favsDispatch} = useGlobalStates()

  const onAddFav = e => {
    e.stopPropagation()
    favsDispatch({type: "addFavs", payload: { name, username, id}})    
  } 

  return (
    <div className="card">
      <Link to={`/dentista/${id}`} >
        <img className="img_card"src={rutes.img_doctor} alt="Imagen usuario" />
      </Link>
      <h4>{name}</h4>
      <h4>{username}</h4> 
      <button onClick={onAddFav} className="favButton">Agregar a favoritos</button>
    </div>
  );
};
export default Card;