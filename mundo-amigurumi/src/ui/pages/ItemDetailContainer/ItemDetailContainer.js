import React, {useEffect,useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.scss'
import {useParams} from 'react-router-dom'


const getItems = new Promise((res, rej)=>{

    setTimeout(() => {
        res(
            
            [
                
                {
                   "id":"1",
                   "title":"Item1",
                   "pictureUrl":"http://via.placeholder.com/450",
                   "description":"es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
                   "price":"$500",
                   "stock":"5"
                },
                {
                   "id":"2",
                   "title":"Item2",
                   "pictureUrl":"http://via.placeholder.com/450",
                   "description":"No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas \"Letraset\".",
                   "price":"$1000",
                   "stock":"5"
                },
                {
                    "id":"3",
                    "title":"Item3",
                    "pictureUrl":"http://via.placeholder.com/450",
                    "description":"No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas \"Letraset\".",
                    "price":"$1400",
                    "stock":"5"
                 }
                 ,
                    {
                       "id":"4",
                       "categoria":"amigurumis",
                       "title":"Item4",
                       "pictureUrl":"http://via.placeholder.com/450",
                       "description":"No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas \"Letraset\".",
                       "price":"$2000",
                       "stock":"5"
                    }
             ]
        )
    }, 2000);

})

const ItemDeteailContainer = () =>{

    const {detailId} = useParams()
 
    const [itemDetailResq, setItemDetailResq] = useState([])

    useEffect(()=>{
        getItems.then((res)=>{
            setItemDetailResq(res)
        })

    },[detailId])


   return(
        <>
            {itemDetailResq.length === 0 ?  <p>loading</p>
       
            : itemDetailResq.map((itemDetail)=>{
                return(
                    itemDetail.id === detailId ?
                        <ItemDetail
                            key = {itemDetail.id}
                            title={itemDetail.title}
                            pictureUrl={itemDetail.pictureUrl}
                            description={itemDetail.description}
                            price={itemDetail.price}
                            stock={itemDetail.stock}
                            initial={0}
                        /> : null
                    )
            })                
            
        }

            
        </>
    )

}

export default ItemDeteailContainer