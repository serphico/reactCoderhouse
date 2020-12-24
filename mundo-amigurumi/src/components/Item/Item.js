import React from "react";
import './Item.scss'
import {NavLink} from 'react-router-dom'


const Item = ({idProduct, title, pictureUrl, price})=>{


    console.log(idProduct)
    return(
        <NavLink to={`/productos/${idProduct}`}>
            <div>
                <h2>{title}</h2>
                <img src={pictureUrl} alt="imagen del producto"/>
                <p>{price}</p>
            </div>
        </NavLink>

    )

}

export default Item