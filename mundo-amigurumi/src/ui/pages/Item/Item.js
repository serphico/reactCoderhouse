import React from "react";
import './Item.scss'
import {Link} from 'react-router-dom'


const Item = ({idProduct, title, pictureUrl, price})=>{



    return(
        <Link to={`/productoDetalle/${idProduct}`}>

                <div>
                    <h2>{title}</h2>
                    <img src={pictureUrl} alt="imagen del producto"/>
                    <p>{price}</p>
                </div>
        </Link>


    )

}

export default Item