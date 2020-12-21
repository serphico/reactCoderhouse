import React from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.scss'

const getItems = new Promise((res, rej)=>{
    setTimeout(() => {
        res(
            [
                {
                   "id":1,
                   "title":"Item1",
                   "pictureUrl":"http://via.placeholder.com/450",
                   "description":"es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
                   "price":"$500"
                },
                {
                   "id":2,
                   "title":"Item2",
                   "pictureUrl":"http://via.placeholder.com/250",
                   "description":"No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas \"Letraset\".",
                   "price":"$1000"
                }
             ]
        )
    }, 2000);
})


const ItemDeteailContainer = () =>{

    const [loading, setLoading] = React.useState(false)
    const [itemDetail, setItemDetail] = React.useState([])

    React.useEffect(()=>{
        setLoading(true)
        getItems.then((itemDetail)=>{
           console.log(itemDetail)
        })

    },[])

    return(
        <>
            {itemDetail.length === 0 ? <h1>No estoy cargado</h1> : null}
        </>
    )

}

export default ItemDeteailContainer