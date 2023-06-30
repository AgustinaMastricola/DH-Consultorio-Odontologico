//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
import Card from "../Components/Card"
import { useGlobalStates } from "../Contexts/global.context";

const Favs = () => {
  const {favsState} = useGlobalStates()

  return (
    <>
      <h1>Tus dentistas favoritos</h1>
      <div className="card-grid">
        <div className="card-grid">
          {favsState.length > 0 ? (
            favsState.map(fav => <Card key={fav.id} name={fav.name} username={fav.username} id={fav.id}/>)
          ) : (
            <p>No tiene dentistas favoritos</p>
          )}
        </div>
      </div>
    </>
  );
};
export default Favs;
