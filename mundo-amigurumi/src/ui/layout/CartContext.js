import React, {createContext, useState, useEffect} from 'react';

export const DbContext = createContext()
const {Provider, Consumer} = DbContext

export const DbContextProvider = ({children}) =>{
 
    const [itemDb, setItemDb] = useState('Matias')
    

    return(
        <Provider value={{itemDb}}>

            {children}
            
            

        </Provider>
    )
}

