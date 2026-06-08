import React, {createContext, useContext, useState} from 'react'

const Context= createContext()
export const ContextProvider=({children})=> {
    const [surprise,setSurprise] = useState("Banana")
  return (
      <Context.Provider value={{surprise,setSurprise}}>
        {children}
      </Context.Provider>
  )
}

export const useData=()=>useContext(Context)