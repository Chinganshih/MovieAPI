import './Cloth.css';
import React from 'react'
import { useEffect } from 'react'

const Cloth = ( {getClothByCat, categoryId, clothes, getBanner, banner}) => {


    
    useEffect(() => {
        getClothByCat(categoryId);
        getBanner(categoryId);
    },[categoryId])
 

  return (
    <div>
        
        <div className='banner' >
           <img src={banner} alt='banner' width="100%" />
        </div>

        <div className='main_content'>
        {
            clothes?.map((c, i) => (
                <div key={i} className="card" >
                    <div className='card_img'>
                        <img src={c.poster} />
                    </div>

                    <div className='card_header' >
                        <h2 className="card_title">{c.title}</h2>
                        <p className="price">{c.price}<span>{c.currency}</span></p>
                        <div className='btn'>Add to cart</div>
                    </div>
                </div>
            )
                
            )
            
        }
    </div> 
    </div>
  )
}

export default Cloth