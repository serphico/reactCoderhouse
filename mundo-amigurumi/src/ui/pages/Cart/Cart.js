import React, {useState,useEffect, useContext} from 'react'
import Button from '@material-ui/core/Button'
import BuyForm from '../BuyForm/BuyForm'
import firebase from "firebase/app";
import "firebase/firestore";
import {CartContextInit} from '../../layout/CartContext'
import './cart.scss'

function Cart() {

    const {allCart, cartPrice, removeCart,removeItem,buyItem,setNameForm, setPhoneForm, setEmailForm} = useContext(CartContextInit)



    const nameInfo = (e) => {
        const info = e.target.value
        setNameForm(info)
    }

    const phoneInfo = (e) => {
        const info = e.target.value
        setPhoneForm(info)
    }

    const emailInfo = (e) => {
        const info = e.target.value
        setEmailForm(info)
    }


    const addBuy = () => {

        allCart.map((res)=>{
            buyItem(res.prod.id,res.prod.price, res.cant, cartPrice())

        })

    }


    return (
        <>
               {allCart.length === 0 ?  <> <p> vacio tu carrito</p></> :
                 allCart.map((e)=>{

                    const addId =()=>{
                        removeItem(e.prod.id)
                    }

                    return(
                        <>
                            <div key={e.prod.id} id="CartItemContainer">
                                <img src={e.prod.pictureUrl} alt="imagen de producto"/>
                                <h3>{e.prod.title}</h3>
                                <span>{e.prod.price}</span>
                                <p>cantidad: {e.cant}</p>
                                <Button variant="contained" color="primary" onClick={addId}>Quitar</Button>
                            </div>




                        </>
                    )
                 })
               }
                                           <div>
                                <p>Total:{cartPrice()}</p>
                            </div>
                            <Button  variant="contained" color="primary" onClick={removeCart}>borrar</Button>
                            <BuyForm key='buyFormComponent'  nameInfo={nameInfo} emailInfo={emailInfo} phoneInfo={phoneInfo} addBuy={addBuy}/>
        </>
    )
}

export default Cart
