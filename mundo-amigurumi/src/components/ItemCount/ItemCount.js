import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const ItemCount = (props) => {

    const initial = parseInt(props.initial);
    const stock = parseInt(props.stock);

    const [count, setCount] = React.useState(initial);


    const countAdd = () => {
           if(count < stock){
            setCount(count + 1 );
           }
    }

    const countRemove = () => {

        if(count > initial){
            setCount(            
                count - 1            
                );
        }
    }

    return(
        <div>
            <RemoveIcon onClick={countRemove}></RemoveIcon>
                <span>{count}</span>
            <AddIcon onClick={countAdd}></AddIcon>
        </div>
    );
    

}

export default ItemCount;
