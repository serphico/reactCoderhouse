import React from "react";
import '../sass/ItemListContainer.scss'

const ItemListContainer = (props) => {
    return(
        <section>
            <h1>{props.greeting}</h1>
        </section>
    );
}

export default ItemListContainer;