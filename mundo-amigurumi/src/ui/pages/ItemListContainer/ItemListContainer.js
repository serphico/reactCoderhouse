import React, {useEffect,useState, useContext} from "react";
import './ItemListContainer.scss';
import ItemList from '../ItemList/ItemList'
import {useParams} from 'react-router-dom'
import {DbContext} from '../../layout/ProductContext'


const ItemListContainer = () => {

    const {id} = useParams()

    const {itemDb} = useContext(DbContext)
    

    return(
        <section id="itemsContainer">
            {itemDb.length === 0 ?  <p>loading</p>
       
            : itemDb.map((dataItem)=>{

                return(id ?
                    dataItem.category === id ?
                    (
                    <ItemList 
                    key={dataItem.id} idProduct={dataItem.id}
                    categoria={dataItem.category}
                    title={dataItem.title}
                     pictureUrl={dataItem.pictureUrl}
                    price={dataItem.price}  
                    />) :null

                    :(<ItemList 
                    key={dataItem.id} idProduct={dataItem.id}
                    categoria={dataItem.category}
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