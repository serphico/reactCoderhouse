import React from 'react'
import './ItemDetail.js'

const ItemDetail = ({itemDetailResq}) =>{

    const [itemDetail, setItemDetail] = React.useState(false)

    const [itemDetailRes, setItemDetailRes] = React.useState([])

    React.useEffect(()=>{

        setItemDetail(true)

        setItemDetailRes(console.log(itemDetailRes))

    },[])

    

    return(
        <>
            {itemDetail ? <p>Loading</p> : <div>
                
                </div>}
        </>
    )
}

export default ItemDetail