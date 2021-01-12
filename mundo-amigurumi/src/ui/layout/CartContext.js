import React, {createContext, useState, useEffect} from 'react';

const DbContext = createContext()
const {Provider, Consumer} = DbContext

const DbContextProvider = ({children}) =>{
 
    const [itemDb, setItemDb] = useState('Matias')
    

    return(
        <Provider value={{itemDb}}>


            {children}
            
            

        </Provider>
    )
}

export default DbContext

export {DbContextProvider}
