import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import './ItemCount.scss'

const ItemCount = (props) => {

    const initial = parseInt(props.initial);
    const stock = parseInt(props.stock);

    const [count, setCount] = React.useState(initial);

    const countAdd = () => {
           if(count < stock && count > 0){
            setCount(count + 1 );
           }
    }

    const countRemove = () => {

        if(count > initial && count > 0){
            setCount(            
                count - 1            
                );
        }
    }




    return(
        <div className="countContainer">
            <RemoveIcon onClick={countRemove}></RemoveIcon>
                <span>{count}</span>
            <AddIcon onClick={countAdd}></AddIcon>
        </div>
    );
    

}

export default ItemCount;
