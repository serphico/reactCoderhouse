import React from 'react'
import Button from '@material-ui/core/Button'
import { TextField  } from '@material-ui/core';

const BuyForm = ({addBuy,nameInfo,phoneInfo,emailInfo}) => {



    return (
        <>
        <form>
        <TextField id="standard-basic" label="Nombre y Apellido" required onChange={nameInfo}/>
        <TextField id="standard-basic" label="E-mail" required onChange={emailInfo}/>
        <TextField id="standard-basic" label="Telefono" type="number" required onChange={phoneInfo}/>
        <Button  variant="contained" color="primary" onClick={addBuy}> Finalizar Comprar</Button>
        </form>

        </>
    )
}

export default BuyForm
