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
                            itemDetail = {itemDetail}
                            initial={initial}
                        /> : null
                    )
            })                
            
        }

            
        </>
    )

}

export default ItemDeteailContainer