import React from "react";
import { Link } from 'react-router-dom'

const Card = ({ name, username, id }) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    console.log("click");
  }

  return (
    <div className="card">
    <Link to={`/dentista/${id}`} >
      <img className="img_card"src="./images/doctor.jpg" alt="Imagen usuario" />
    </Link>
    <h4>{name}</h4> 
    {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
    <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
