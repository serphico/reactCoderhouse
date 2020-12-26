import React from 'react'
import './ItemDetail.js'


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
            </div>
        </div>

        <div className='itemContainerDesc'>
            <p>{description}</p>
        </div>
        </>
    )
}

export default ItemDetail