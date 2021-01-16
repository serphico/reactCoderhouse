import React, {useContext} from 'react'
import Button from '@material-ui/core/Button'

import {CartContextInit} from '../../layout/CartContext'
import './cart.scss'

function Cart() {

    const {allCart, cartPrice, removeCart,removeItem} = useContext(CartContextInit)


    return (
        <>
               {
                 allCart.map((e)=>{

                    const addId =()=>{
                        removeItem(e.prod.id)
                    }

                    return(
                        <div id="CartItemContainer">
                        <img src={e.prod.pictureUrl} alt="imagen de producto"/>
                        <h3>{e.prod.title}</h3>
                        <span>{e.prod.price}</span>
                        <p>cantidad: {e.cant}</p>
                        <Button variant="contained" color="primary" onClick={addId}>Quitar</Button>
                        </div>
                    )
                 })
               }

                        <div>
                            <p>Total:{cartPrice()}</p>
                        </div>

                        <Button variant="contained" color="primary" onClick={removeCart}>borrar</Button>
        </>
    )
}

export default Cart
