import React from "react";
import './Item.scss'

const Item = ({id, title, pictureUrl, price})=>{

    return(
        <div>
            <h2>{title}</h2>
            <img src={pictureUrl} alt="imagen del producto"/>
            <p>{price}</p>
        </div>
    )

}

export default Item