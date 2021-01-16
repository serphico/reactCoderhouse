import React, {useContext} from "react";
import { IoCart } from 'react-icons/io5'
import './CartWidget.scss'
import {CartContextInit} from '../../layout/CartContext'
import {Link} from 'react-router-dom'


const CartWidget = () => {

    const {cartLength} = useContext(CartContextInit)

    return(
        <Link to={'/cart'}> <IoCart className='cartIcon'/> {cartLength() === 0 ? '' : cartLength()}</Link>
    );
}

export default CartWidget;