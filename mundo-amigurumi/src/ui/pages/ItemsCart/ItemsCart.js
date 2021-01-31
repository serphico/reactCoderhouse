import React from 'react'
import Button from '@material-ui/core/Button'
import './ItemsCart.scss'

function ItemsCart({imgItemsCart, titleItemsCart, priceItemsCart,cantItemsCart,addId}) {
    return (
        <div  id="CartItemContainer">
                                <img src={imgItemsCart} alt="imagen de producto"/>
                                <h3>{titleItemsCart}</h3>
                                <span>{priceItemsCart}</span>
                                <p>cantidad: {cantItemsCart}</p>
                                <Button variant="contained" color="primary" onClick={addId}>Quitar</Button>
        </div>
    )
}

export default ItemsCart
