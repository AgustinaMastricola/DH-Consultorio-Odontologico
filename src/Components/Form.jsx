import React from "react";

const Form = ({handleSubmit, setData}) => {

  const handleBlur = (e) => {
  setData((prevData) => ({...prevData, [e.target.name]: e.target.value}))
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>Nombre Completo</label>
          <input name="name" type="text" onBlur={handleBlur}/>
          <label>Email </label>
          <input name="email" type="text" onBlur={handleBlur}/>
          <button>Enviar</button>
        </fieldset>
      </form>
    </div>
  );
};

export default Form;