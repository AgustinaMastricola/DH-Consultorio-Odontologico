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

  return (
    <> 
      <h1>Detail Dentist id </h1>
      <table>
        <tr>
          <th>Nombre</th>
          <th>Email</th>
          <th>Tel</th>
          <th>WebSite</th>
        </tr>
        <tr>
          <td>{dentista.name}</td>
          <td>{dentista.email}</td>
          <td>{dentista.phone}</td>
          <td>{dentista.website}</td>
        </tr>
      </table>
    </>
  )
}

export default Detail