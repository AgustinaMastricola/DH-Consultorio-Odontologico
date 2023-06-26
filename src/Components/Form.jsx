import React from "react";


const Form = ({handleSubmit, setData}) => {
//Aqui deberan implementar el form completo con sus validaciones
// Nombre completo (con longitud mayor a 5)
// Email (con formato correcto de email)
const handleBlur = (e) => {
  setData((prevData) => ({...prevData, [e.target.name]: e.target.value}))
}
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Nombre Completo</label>
        <input name="name" type="text" onBlur={handleBlur}/>
        <label>Email </label>
        <input name="email" type="text" onBlur={handleBlur}/>
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default Form;
