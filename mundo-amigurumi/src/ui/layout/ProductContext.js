import React, {createContext, useState, useEffect} from 'react';
import {firestoreExport} from '../../api/conection'


export const DbContext = createContext()
const {Provider, Consumer} = DbContext

export const DbContextProvider = ({children}) =>{


    const [itemDb, setItemDb] = useState([])

    useEffect(()=>{

        const db = firestoreExport()
        const productCollection = db.collection("products")
        const queryData = productCollection.get()


        queryData.then( (res) =>{
            const data = res.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))

            setItemDb(data)
            
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])

    const initial=0

    
    return(
        <Provider value={{itemDb:itemDb,initial:initial}}>

            {children}
            
            

        </Provider>
    )
}

