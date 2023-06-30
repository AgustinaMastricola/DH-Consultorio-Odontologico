
export const reducerDentistas = (state, action) => {
  switch (action.type) {
    case "getList":
      return { ...state, dentistaList: action.payload }
    case "getById":
      return { ...state, dentistaById: action.payload }
    default:
      throw new Error();
  }
}
export const reducerFavs = (state, action) => {
  switch (action.type) {
    case "addFavs":
      return  [...state, action.payload]
    case "deleteFavs":
      return state.filter(fav => fav.id !== action.payload)  
    default:
      throw new Error();
  }
}

export const reducerTheme = (state, action) => {
  switch (action.type){
    case 'toggle':
      return action.payload
    default:
      throw new Error();
  }
}