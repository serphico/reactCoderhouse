import React from "react";
import './ItemListContainer.scss'

const ItemListContainer = (props) => {
    return(
        <section>
            <h1>{props.greeting}</h1>
        </section>
    );
}

export default ItemListContainer;