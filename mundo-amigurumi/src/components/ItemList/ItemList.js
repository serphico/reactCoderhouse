import React from "react";
import './ItemList.scss'
import Item from '../Item/Item'

const ItemList = ()=>{

  const [itemListState, setItemListState] = React.useState([]);

  React.useEffect(()=>{
            setTimeout(() => {
        new Promise((res,rej)=>{
            res(
                [
                    {
                       "id":1,
                       "title":"Item1",
                       "pictureUrl":"http://via.placeholder.com/250",
                       "price":"$500"
                    },
                    {
                       "id":2,
                       "title":"Item2",
                       "pictureUrl":"http://via.placeholder.com/250",
                       "price":"$1000"
                    }
                 ]  
            )
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