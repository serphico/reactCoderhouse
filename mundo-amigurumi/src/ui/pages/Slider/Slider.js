import React, {useState, useEffect} from 'react'
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import './Slider.scss'

const getImg = new Promise((res, rej)=>{
    setTimeout(() => {
        res(
            [
                {
                   "id":1,
                   "pictureUrl":" https://i.ibb.co/RT14bBF/01.jpg",
                },
                {
                   "id":2,
                   "pictureUrl":"https://i.ibb.co/7CYRzML/02.jpg",
                },
                {
                   "id":3,
                   "pictureUrl":"https://i.ibb.co/LkyCFnn/03.jpg",
                }
             ]
        )
    }, 2000);
})



const Slider = () => {

    const [imgSlider, setImgSlider] = useState([])

    useEffect(()=>{
        getImg.then((res)=>{
            setImgSlider(res)
        })

        
    })

    //console.log(imgSlider)

    return (
        <Carousel arrows dots>
        {
            imgSlider.length === 0 ?
            <p>Loading</p>
            :imgSlider.map((imgs)=>{
                
  
                return(

                        <img key={imgs.id} className={`slider${imgs.id}`} src={imgs.pictureUrl} alt="imagenes de slider"/>
                )
            })
        }
            
        </Carousel>
    )
}

export default Slider
