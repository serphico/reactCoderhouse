import React, {useContext} from 'react'
import ItemsCart from '../ItemsCart/ItemsCart'
import Button from '@material-ui/core/Button'
import BuyForm from '../BuyForm/BuyForm'
import {CartContextInit} from '../../layout/CartContext'

function Cart() {

    const {allCart, cartPrice, removeCart,removeItem,buyItem,setNameForm, setPhoneForm, setEmailForm,orderId,orderIdAccepted} = useContext(CartContextInit)



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

    console.log(orderId)


    return (
        <>
               {allCart.length === 0 && orderId ?  <> <p>tu carrito esta vacio</p></> :
                 allCart.map((e)=>{

                    const addId =()=>{
                        removeItem(e.prod.id)
                    }

                    return(
                        <>
                        <ItemsCart
                         key={e.prod.id}
                         imgItemsCart={e.prod.pictureUrl} 
                         titleItemsCart={e.prod.title}
                         priceItemsCart={e.prod.price}
                         cantItemsCart={e.cant}
                         addId={addId}
                         />

                        </>
                    )
                 })
                 
               }
               {
                   allCart.length === 0  && orderId  ? null : 
                   <>
                            <div>
                                <p>Total:{cartPrice()}</p>
                            </div>
                            <Button  variant="contained" color="primary" onClick={removeCart}>borrar</Button>
                            <BuyForm key='buyFormComponent'  nameInfo={nameInfo} emailInfo={emailInfo} phoneInfo={phoneInfo} addBuy={addBuy}/>
                   </>
               

               }
               
               {allCart && orderId.length >= 1 ? 
               
               <>
               <h1>Tu compra se ha realizado</h1>
               <p>Su numero de ID de su orden es: {orderId}</p>
               <Button  variant="contained" color="primary" onClick={orderIdAccepted}>Aceptar</Button>

               </>
               
               
               : null

               }
              

        </>
    )
}

export default Cart
