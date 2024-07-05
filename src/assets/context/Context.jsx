import { useReducer, createContext } from "react"

const FavoriteContext = createContext(null);

const favorites = (state, action) =>{
  switch(action.type){
    case 'Add' : 
    if(state.find(chosen => chosen.name === action.payload.name)){
      return [...state]
    }
      return [...state, action.payload]
    case 'Delete' : 
      return state.filter(chosen => chosen.id !== action.payload.id)
    default: 
      return state
    }
}

export function FavoriteProvider ({children}) {
  const [favorite, favoriteAction] = useReducer(favorites, []);
  return (
    <FavoriteContext.Provider value= {{favorite, favoriteAction}}>
      {children}
    </FavoriteContext.Provider>
  )
}

export default FavoriteContext;