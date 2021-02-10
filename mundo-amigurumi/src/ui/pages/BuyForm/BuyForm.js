import React, {useEffect, useContext} from 'react'
import Button from '@material-ui/core/Button'
import { TextField  } from '@material-ui/core'
import {CartContextInit} from '../../layout/CartContext'




const BuyForm = ({addBuy,nameInfo,phoneInfo,emailInfo,verifyEmailInfo}) => {
    

    const {nameForm,phoneForm,emailForm,verifyEmailForm, setVerifyEmailForm, setNameForm, setPhoneForm, setEmailForm} = useContext(CartContextInit)

    useEffect(()=>{
            setNameForm([])
            setPhoneForm([])
            setEmailForm([])
            setVerifyEmailForm([])
    },[])


    return (
        <>
        <form>
        <TextField id="standard-basic" label="Nombre y Apellido" required onChange={nameInfo}/>
        <TextField id="standard-basic" label="E-mail" required onChange={emailInfo}/>
        <TextField id="standard-basic" label="Introduce el E-mail otra vez" required onChange={verifyEmailInfo}/>
        <TextField id="standard-basic" label="Telefono" type="number" required onChange={phoneInfo}/>

        {nameForm.length !== 0 && phoneForm.length !== 0 && emailForm.length !== 0 && emailForm === verifyEmailForm?         <Button  variant="contained" color="primary" onClick={addBuy}> Finalizar Comprar</Button> : null

        }
        </form>

        </>
    )
}

export default BuyForm
