import React from "react";
import { IoCart } from 'react-icons/io5'
import './CartWidget.scss'


const CartWidget = () => {
    return(
        <a href='#'> <IoCart className='cartIcon'/> 0</a>
    );
}

export default CartWidget;