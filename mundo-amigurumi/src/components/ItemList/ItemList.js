import React, {useEffect,useState} from 'react'
import './ItemList.scss'
import Item from '../Item/Item'


const listProduct = new Promise ((res,rej)=>{
    setTimeout(() => {
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
    }, 2000)
    })

const ItemList =()=>{

    const [itemListState, setItemListState] = useState([]);

    useEffect(()=>{
        listProduct.then((res)=>{
            setItemListState(res)
        })
    },[])

    return(
        <>
        {itemListState.length === 0 ? <p>loading</p> : null}
        {
            itemListState.map((dataItem, index)=>{
                return(
                    <Item idProduct={dataItem.id}
                    title={dataItem.title}
                    pictureUrl={dataItem.pictureUrl}
                    price={dataItem.price}        
                    />
                )
            }

        )
        }

        </>
    )
}

export default ItemList;