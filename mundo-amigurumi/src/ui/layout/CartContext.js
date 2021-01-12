import React, {useState, createContext} from 'react'

export const CartContextInit = createContext()

const {Provider, Consumer} = CartContextInit


export function CartContextPrivider( {children}) {
    const [quantity, setQuantity] = useState()
    const [pictureProduct, setPictureProduct] = useState()
    const [productPrice, setProductPrice] = useState()
    const [productTitle, setProductTitle] = useState()

    const datos = {quantity, pictureProduct,productPrice,productTitle }



    return (
        <Provider value={{quantity, setQuantity, pictureProduct, setPictureProduct, productPrice,setProductPrice, productTitle, setProductTitle, datos}}>

            {children}
            
        </Provider>
    )
}

