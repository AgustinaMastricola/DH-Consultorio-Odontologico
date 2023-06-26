import React, { useState, useEffect } from 'react'
import Card from '../Components/Card'
import { Link } from 'react-router-dom'

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
      <h1>Home</h1>
      <div className='card-grid'>
        {dentistas.map((dent)=>(<Link to={`/dentista/${dent.id}`} key={dent.id}><Card name={dent.name} username={dent.username} id={dent.id}/></Link>))}
      </div>
    </main>
  )
}

export default Home