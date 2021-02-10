import React, {useState, createContext} from 'react'
import firebase from "firebase/app";
import "firebase/firestore";
import {firestoreExport} from '../../api/conection'


export const CartContextInit = createContext()

const {Provider} = CartContextInit


export function CartContextPrivider( {children}) {

    const[allCart, setAllCart] = useState([])
    const [idSeteo, setIdSeteo] = useState([])
    const [nameForm, setNameForm] = useState([])
    const [phoneForm, setPhoneForm] = useState([])
    const [emailForm, setEmailForm] = useState([])
    const [verifyEmailForm, setVerifyEmailForm] = useState([])


    const [orderId, setOrderId] = useState([])


    const cartLength = () => {
        return allCart.reduce((acumulator, valueItems)=>{return acumulator + valueItems.cant},0)
    }

    const cartPrice = () =>{
        return allCart.reduce((acumulator, valueItems)=>{return acumulator + valueItems.cant*valueItems.prod.price}, 0)

    }

    const addCart = (items, quantity) =>{

        let itemsIndex = allCart.findIndex(item => item.prod.id === items.id)
        if(itemsIndex === -1){
            setAllCart( allCart => [...allCart, {prod: items, cant: quantity }] )

        }else{
            let modifiedCart = [...allCart]
            console.log(modifiedCart[itemsIndex].cant)
            console.log(quantity)
            if (modifiedCart[itemsIndex].cant < modifiedCart[itemsIndex].prod.stock){
                modifiedCart[itemsIndex].cant += quantity
            }
            if(modifiedCart[itemsIndex].cant > modifiedCart[itemsIndex].prod.stock){
                modifiedCart[itemsIndex].cant = modifiedCart[itemsIndex].prod.stock
            }
            setAllCart(modifiedCart)
        }
 
    }

    const removeItem = (itemId) => {
        //REMOVER ITEM POR ID
        let itemIdRemove = allCart.filter((itemIdRemove) => itemIdRemove.prod.id !== itemId)
        setAllCart(itemIdRemove);

    }

    const removeCart = () =>{
        setAllCart([])
    }

    
    const buyItem = (itemId, itemPrice, itemQuantity, TotalPrice) => {
   
        const db = firestoreExport()
        const orders = db.collection("orders")
        const newOrder = {
            buyer: {nameForm, phoneForm, emailForm},
            items: [{itemId, itemPrice, itemQuantity}], date: firebase.firestore.Timestamp.fromDate(new Date()),TotalPrice}
            setAllCart([])
        orders.add(newOrder).then(({id}) => {
            setOrderId([id])
        }).catch((err)=>{
            console.log(err)
        })

    }

    const seteoParam = (idParam) => {
        setIdSeteo([idParam])

    }

    const orderIdAccepted = () => {
        setOrderId([])
        setAllCart([])
        setNameForm([])
        setPhoneForm([])
        setEmailForm([])
        setVerifyEmailForm([])

    }


    return (
        <Provider value={{allCart, setAllCart, cartLength, cartPrice, addCart, removeCart,removeItem,buyItem,setNameForm, setPhoneForm, setEmailForm,orderId,orderIdAccepted,nameForm,phoneForm,emailForm,idSeteo,seteoParam,verifyEmailForm, setVerifyEmailForm}}>

            {children}
            
        </Provider>
    )
}

