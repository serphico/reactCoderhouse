import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import './ItemCount.scss'



const ItemCount = ({countRemove, countAdd, count}) => {


    return(
        <div className="countContainer">
            <RemoveIcon onClick={countRemove}></RemoveIcon>
                <span>{count}</span>
            <AddIcon  onClick={countAdd}></AddIcon>
        </div>
    );
    

}

export default ItemCount;
