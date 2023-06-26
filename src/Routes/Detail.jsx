import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const [dentista, setDentista] = useState({})
  const params = useParams()
  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`

  useEffect(()=>{
    fetch(url)
    .then((res)=>res.json())
    .then((data)=> setDentista(data))
  },[url])

  console.log(dentista);
  return (
    <>
      <h1>Detail Dentist id </h1>
      <p>Nombre: {dentista.name} Email: {dentista.email} WebSite: {dentista.website}</p>
    </>
  )
}

export default Detail