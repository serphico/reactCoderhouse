import React, {useContext} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.scss'
import {useParams} from 'react-router-dom'
import {DbContext} from '../../layout/ProductContext'

const ItemDeteailContainer = () =>{

    
const {itemDb,initial} = useContext(DbContext)


    const {detailId} = useParams()
 

   return(
       
        <>

            {itemDb.length === 0 ?  <p>loading</p>
       
            : itemDb.map((itemDetail)=>{
                return(
                    itemDetail.id === detailId ?
                        <ItemDetail
                            key = {itemDetail.id}
                            title={itemDetail.title}
                            pictureUrl={itemDetail.pictureUrl}
                            description={itemDetail.description}
                            price={itemDetail.price}
                            stock={itemDetail.stock}
                            initial={initial}
                        /> : null
                    )
            })                
            
        }

            
        </>
    )

}

export default ItemDeteailContainer