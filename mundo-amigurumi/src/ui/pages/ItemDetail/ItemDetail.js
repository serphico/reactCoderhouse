import React from 'react'
import './ItemDetail.js'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({title, description, pictureUrl, price}) =>{

    return(
        <>
        <div className='itemContainerInfo'>
            <div>
                <img src={pictureUrl} alt="imagen del producto"/>
            </div>
            <div>
                <h2>{title}</h2>
                <span>{price}</span>
                <ItemCount stock={5} initial={1}/>
            </div>
        </div>

        <div className='itemContainerDesc'>
            <p>{description}</p>
        </div>
        </>
    )
}

export default ItemDetail