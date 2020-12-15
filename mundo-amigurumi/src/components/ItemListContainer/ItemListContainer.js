import React from "react";
import './ItemListContainer.scss';
import Button from '@material-ui/core/Button';
import ItemCount from '../ItemCount/ItemCount'

const ItemListContainer = (props) => {
    return(
        <section>
            <h1>{props.greeting}</h1>
            <ItemCount stock='5' initial='1'/>
            <Button variant="contained" color="primary" >
                 Hello World
            </Button>
        </section>
    );
}

export default ItemListContainer;