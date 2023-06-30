import React, { useState } from "react";
import '../css/Form.css'
import { useGlobalStates } from "../Contexts/global.context";

const Form = () => {
  const {themeState} = useGlobalStates()
  const [data, setData] = useState({
    name: '',
    email: ''
  })
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if(data.name.length >= 6 && isValidEmail(data.email)){
      setError(false)
      setSuccess(true)
      console.log(data);
    } else {
      setSuccess(false)
      setError(true)
    }
  }

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
          <button className= {themeState? 'darkButton': ''}>Enviar</button>
        </fieldset>
        {error && <p className={themeState? 'darkMessage': 'error'}>Por favor verifique su información nuevamente</p>}
        {success && <p className={themeState? 'darkMessage': 'success'}>Gracias {data.name}, te contactaremos cuanto antes vía email.</p> }  
      </form>
    </div>
  );
};

export default Form;
function isValidEmail(email){
  let regexEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
  return regexEmail.test(email)
}