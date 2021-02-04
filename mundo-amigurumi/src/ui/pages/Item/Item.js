import React, {useContext} from "react";
import './Item.scss'
import {Link} from 'react-router-dom'
import { Paper } from '@material-ui/core';



const Item = ({idProduct, title, pictureUrl, price})=>{


    return(
        <Link to={`/productoDetalle/${idProduct}`}>

                    <Paper elevation={3}>
                    <h2>{title}</h2>
                    <img src={pictureUrl} alt="imagen del producto"/>
                    <p>${price}</p>
                    </Paper>
        </Link>


    )

}

export default Item