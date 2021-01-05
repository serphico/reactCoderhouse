import React, {useState, useEffect} from 'react'
import Button from '@material-ui/core/Button'


function BuyButton({count}) {

    const [displayButton, setDisplayButton] = useState(count)

    useEffect(()=>{

            setDisplayButton(count)
        

    })

    console.log(displayButton)

    return (
        
        <>
        
            {displayButton === 0 ? null : <Button variant="contained" color="primary">Comprar {displayButton} unidades.</Button>}
            
        </>
    )
}

export default BuyButton
