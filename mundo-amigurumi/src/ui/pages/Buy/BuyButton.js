import React, {useState, useEffect} from 'react'
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom'


function BuyButton({count}) {

    const [displayButton, setDisplayButton] = useState(count)

    useEffect(()=>{

            setDisplayButton(count)
        

    })

    console.log(displayButton)

    return (
        
        <>
        
            {displayButton === 0 ? null : <Link to={`/cart`}><Button variant="contained" color="primary">Comprar {displayButton} unidades.</Button></Link>}
            
        </>
    )
}

export default BuyButton
