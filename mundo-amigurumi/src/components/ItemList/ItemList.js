import React from "react";
import './ItemList.scss'
import Item from '../Item/Item'

const ItemList = ()=>{

  const [itemListState, setItemListState] = React.useState([]);

  React.useEffect(()=>{
            setTimeout(() => {
                fetch('./data/item.json')    

        .then((resultado)=>{
            return resultado.json()
        })
        .then((resultado) => {

            setItemListState(
                resultado
            )
                 
        })
    }, 2000)
    },[])

  
    return(
        <>
        {itemListState.length === 0 ? <p>loading</p> : null}
        <Item item={itemListState}>
            
        </Item>
        </>
    )

}

export default ItemList;