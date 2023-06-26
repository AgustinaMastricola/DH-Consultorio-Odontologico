import React, { useState, useEffect } from 'react'
import Card from '../Components/Card'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [dentistas, setDentistas] = useState([])
  const url = "https://jsonplaceholder.typicode.com/users"

  useEffect(()=>{
    fetch(url)
    .then((res)=>res.json())
    .then((data)=> setDentistas(data))
  },[])

  return (
    <main className="" >
      <h1>Profesionales</h1>
      <div className='card-grid'>
        {dentistas.map((dent)=>(<Card key={dent.id} name={dent.name} username={dent.username} id={dent.id}/>))}
      </div>
    </main>
  )
}

export default Home