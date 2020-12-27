import React from "react";
import './ItemListContainer.scss';
import ItemList from '../ItemList/ItemList'

const ItemListContainer = (props) => {
    return(
        <>
        <h1>{props.greeting}</h1>

        <section id="itemsContainer">            
            <ItemList />
        </section>
        </>
    );
}

export default ItemListContainer;