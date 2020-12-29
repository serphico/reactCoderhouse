import React from 'react'
import './ItemList.scss'
import Item from '../Item/Item'




const ItemList =({key, idProduct, categoria, title, pictureUrl, price})=>{

    

    return(
        <>

                        <Item key={key} idProduct={idProduct}
                         categoria={categoria}
                         title={title}
                          pictureUrl={pictureUrl}
                         price={price}        
                         />



        </>
    )
}

export default ItemList;