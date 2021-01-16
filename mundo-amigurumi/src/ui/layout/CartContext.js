import React, {useState, createContext} from 'react'

export const CartContextInit = createContext()

const {Provider, Consumer} = CartContextInit


export function CartContextPrivider( {children}) {

    const[allCart, setAllCart] = useState([])

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
        let itemIdRemove = allCart.filter((itemIdRemove) => itemIdRemove.prod.id != itemId)
        setAllCart(itemIdRemove);

    }

    const removeCart = () =>{
        setAllCart([])
    }


    return (
        <Provider value={{allCart, setAllCart, cartLength, cartPrice, addCart, removeCart,removeItem}}>

            {children}
            
        </Provider>
    )
}

