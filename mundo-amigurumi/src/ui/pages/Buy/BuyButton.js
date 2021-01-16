import React, {useState, useEffect} from 'react'
import Button from '@material-ui/core/Button'



function BuyButton({count, addItem}) {


    const [displayButton, setDisplayButton] = useState(count)

    useEffect(()=>{

            setDisplayButton(count)
        

    })


    return (
        
        <>
        
            {displayButton === 0 ? null : <Button onClick={addItem} variant="contained" color="primary">Comprar {displayButton} unidades.</Button>}
            
        </>
    )
}

export default BuyButton
