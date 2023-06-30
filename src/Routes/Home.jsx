import Card from "../Components/Card"
import { useGlobalStates } from "../Contexts/global.context"
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {dentState} = useGlobalStates()
  const {themeState} = useGlobalStates()
  return (
    <main className="" >
      <h1>Profesionales</h1>
      <div className='card-grid'>
      {dentState.dentistaList.map(dent => <Card key={dent.id} id={dent.id} name={dent.name} username={dent.username}/>)}
      </div>
    </main>
  )
}

export default Home