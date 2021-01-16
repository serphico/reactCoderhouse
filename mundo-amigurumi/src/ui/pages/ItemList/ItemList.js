import React from 'react'
import './ItemList.scss'
import Item from '../Item/Item'




const ItemList =({idProduct, categoria, title, pictureUrl, price})=>{

    

    return(
        <>

                        <Item key={idProduct} idProduct={idProduct}
                         categoria={categoria}
                         title={title}
                          pictureUrl={pictureUrl}
                         price={price}        
                         />



        </>
    )
}

export default ItemList;