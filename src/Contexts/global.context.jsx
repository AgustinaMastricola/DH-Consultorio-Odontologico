import { createContext, useContext, useEffect, useReducer } from "react";
import { reducerDentistas, reducerFavs } from "./reducer";

const ContextGlobal = createContext();

const initialStateDentista = {
  dentistaList: [],
  dentistaById: {},
}
const initialStateFavs = JSON.parse(localStorage.getItem('favs')) || []

const ContextProvider = ({ children }) => {
  const [dentState, dentDispatch] = useReducer(reducerDentistas, initialStateDentista)
  const [favsState, favsDispatch] = useReducer(reducerFavs, initialStateFavs)
  const url = "https://jsonplaceholder.typicode.com/users"
  
  useEffect(()=>{
    fetch(url)
    .then((res) => res.json())
    .then((data) => dentDispatch({type: 'getList', payload: data}))
  },[])

  useEffect(()=>{
    localStorage.setItem('favs', JSON.stringify(favsState))
  },[favsState])

  return (
    <ContextGlobal.Provider value={{
      dentState, dentDispatch,
      favsState, favsDispatch
    }}>
      {children}
    </ContextGlobal.Provider>
  );
};
export default ContextProvider
export const useGlobalStates = () => useContext(ContextGlobal)