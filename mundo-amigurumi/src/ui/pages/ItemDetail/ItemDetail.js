import React, {useState} from 'react'
import './ItemDetail.scss'
import ItemCount from '../ItemCount/ItemCount'
import BuyButton from '../Buy/BuyButton'

const ItemDetail = ({title, description, pictureUrl, price, stock, initial}) =>{

    const [count, setCount] = useState(initial);

    const countAdd = () => {
           if(count < stock){
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



    return(
        <>
        <div className='itemContainerInfo'>
            <div>
                <img src={pictureUrl} alt="imagen del producto"/>
            </div>
            <div className="itemDescriptions">
                <h2>{title}</h2>
                <span>{price}</span>
                <ItemCount countAdd={countAdd} countRemove={countRemove} count={count}/>
                <BuyButton count={count} initial={initial}/>
            </div>
        </div>

        <div className='itemContainerDesc'>
            <p>{description}</p>
        </div>
        </>
    )
}

export default ItemDetail