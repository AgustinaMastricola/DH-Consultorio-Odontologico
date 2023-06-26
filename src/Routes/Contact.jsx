import React, { useState } from 'react'
import Form from '../Components/Form'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
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
  return (
    <div>
      <h1>Quieres saber mas?</h1>
      <p>Envianos tus datos así te contactamos!</p>
      <Form handleSubmit={handleSubmit} setData={setData}/>
      {error && <p style={{color:"rgb(198, 43, 43)"}}>Por favor verifique su información nuevamente</p>}
      {success && <p style={{color:"rgb(81, 87, 50)"}}>Gracias {data.name}, te contactaremos cuanto antes vía email.</p> }
    </div>
  )
}
export default Contact

function isValidEmail(email){
  let regexEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
  return regexEmail.test(email)
}