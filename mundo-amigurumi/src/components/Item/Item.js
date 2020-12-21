import React from "react";
import './Item.scss'

const Item = ({item})=>{

    return(
        <section id='items'>
            {      
                item.map((allItem)=>{
                    console.log(allItem.title) 
                    return <div key={allItem.id}>
                        <h3>{allItem.title}</h3>
                        <img src={allItem.pictureUrl}/>
                        <p>{allItem.price}</p>
                    </div>
                })           

      
                
            }
        </section>
    )

}

export default Item;