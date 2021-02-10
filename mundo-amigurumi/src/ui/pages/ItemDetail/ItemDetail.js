import React, {useState, useContext} from 'react'
import './ItemDetail.scss'
import ItemCount from '../ItemCount/ItemCount'
import BuyButton from '../Buy/BuyButton'
import {CartContextInit} from '../../layout/CartContext'


const ItemDetail = ({itemDetail, initial}) =>{

    const {addCart} = useContext(CartContextInit)


    const [count, setCount] = useState(initial);

    const countAdd = () => {
           if(count < itemDetail.stock){
            setCount(count + 1 );
           }
    }


    const countRemove = () => {

        if(count > initial){
            setCount(            
                count - 1            
                );
        }
    }


    const addItem = () =>{
        addCart(itemDetail, count)
    }
   
    


    return(
        <div className='itemDetailContainer'>
        <div className='itemContainerInfo'>
            <div>
                <img src={itemDetail.pictureUrl} alt="imagen del producto"/>
            </div>
            <div className="itemDescriptions">
                <h2>{itemDetail.title}</h2>
                <span>Precio: ${itemDetail.price}</span>
                <ItemCount count={count} countAdd={countAdd} countRemove={countRemove}/>
                <BuyButton addItem={addItem} count={count}/>
            </div>
        </div>

        <div className='itemContainerDesc'>
            <h3>Descripción</h3>
            <p>{itemDetail.description}</p>
        </div>
        </div>
    )
}

export default ItemDetail