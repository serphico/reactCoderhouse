import React, {useEffect,useState} from "react";
import './ItemListContainer.scss';
import ItemList from '../ItemList/ItemList'
import {useParams} from 'react-router-dom'

const listProduct = new Promise ((res,rej)=>{
    setTimeout(() => {
              res(
                [
                    {
                       "id":"1",
                       "title":"Item1",
                       "categoria":"patrones",
                       "pictureUrl":"http://via.placeholder.com/250",
                       "price":"$500"
                    },
                    {
                       "id":"2",
                       "title":"Item2",
                       "categoria":"amigurumis",
                       "pictureUrl":"http://via.placeholder.com/250",
                       "price":"$1000"
                    },
                    {
                       "id":"3",
                       "categoria":"patrones",
                       "title":"Item3",
                       "pictureUrl":"http://via.placeholder.com/250",
                       "price":"$1500"
                    }
                    ,
                    {
                       "id":"4",
                       "categoria":"amigurumis",
                       "title":"Item4",
                       "pictureUrl":"http://via.placeholder.com/250",
                       "price":"$2000"
                    }
                 ]  
            )
        }, 2000)

    
    })

const ItemListContainer = () => {

    const {id} = useParams()
    
    const [itemListState, setItemListState] = useState([]);

    useEffect(()=>{
        listProduct.then((res)=>{
            setItemListState(res)
        })

    },[id])

    return(
        <section id="itemsContainer">
            {itemListState.length === 0 ?  <p>loading</p>
       
            : itemListState.map((dataItem)=>{

                return(id ?
                    dataItem.categoria === id ?
                    (
                    <ItemList 
                    key={dataItem.id} idProduct={dataItem.id}
                    categoria={dataItem.categoria}
                    title={dataItem.title}
                     pictureUrl={dataItem.pictureUrl}
                    price={dataItem.price}  
                    />) :null

                    :(<ItemList 
                    key={dataItem.id} idProduct={dataItem.id}
                    categoria={dataItem.categoria}
                    title={dataItem.title}
                     pictureUrl={dataItem.pictureUrl}
                    price={dataItem.price}  
                    />) 
                    )
            })                
            
        }

            
        </section>
    )

}

export default ItemListContainer;