import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useGlobalStates } from '../Contexts/global.context';
import '../css/Detail.css'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const {dentState, dentDispatch} = useGlobalStates()
  const params = useParams()
  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`
  const {themeState} = useGlobalStates()

  useEffect(() => {
    fetch(url)
    .then((res) =>res.json())
    .then((data) => dentDispatch({type: 'getById', payload: data}))
  })

  return (
    <main className={themeState? '': 'dark'}> 
      <h1>Detalle del Dentista</h1>
      <table>
        <tr>
          <th>Nombre</th>
          <th>Email</th>
          <th>Tel</th>
          <th>WebSite</th>
        </tr>
        <tr>
          <td>{dentState.dentistaById.name}</td>
          <td>{dentState.dentistaById.email}</td>
          <td>{dentState.dentistaById.phone}</td>
          <td>{dentState.dentistaById.website}</td>
        </tr>
      </table>
    </main>
  )
}

export default Detail