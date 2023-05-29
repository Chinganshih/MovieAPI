/* eslint-disable jsx-a11y/alt-text */
import './Cloth.css';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const Cloth = ({clothes}) => {

    const navigate = useNavigate();
    function reviews (clothId){
        navigate(`/Reviews/${clothId}`);
    }

    var ads = [
        {
            id: 1,
            title : "Here cheap has quality",
            scr : "https://sominchw.sirv.com/Images/Clothes/ad3.png"
        },
        {
            id: 2,
            title : "The thrift lovers’ thrift stores",
            scr : "https://sominchw.sirv.com/Images/Clothes/ad1.jpg"
        },
        {
            id: 3,
            title : "The kind way of economy",
            scr : "https://sominchw.sirv.com/Images/Clothes/ad2.jpg"
        }


    ]

    // const listItems = clothes?.map((cloth) => 
    //     <div className="card" key={cloth.imbdId}>
    //         <div className='card_img'>
    //             <img src={cloth.poster} />
    //         </div>

    //         <div className='card_header'>
    //             <h2 className="card_title">{cloth.title}</h2>
    //             <p className="price">{cloth.price}<span>{cloth.currency}</span></p>
    //             <div className='btn'>Add to cart</div>
    //         </div>
    //     </div>
    // );

  return (
    <div className='cloth-carousel-container'>

    <div className='intro'>

        <div className='intro-container'>
            <div className="image-stack">
            <div className="image-stack__item image-stack__item--bottom">
                <img src="https://sominchw.sirv.com/Images/Clothes/milktea.png" alt=""/>
            </div>
            <div className="image-stack__item image-stack__item--top">
                <h3 className="display-4 mb-8" color='black'>2023 Second-Hand Collection</h3>
                <a className="btn btn-dark" href="#">What's New?</a>
                <img src="https://sominchw.sirv.com/Images/Clothes/2hand.jpg" alt=""/>
            </div>
            </div>

        </div>

        
    </div>

    <div className="ads-container">
        <Carousel variant="dark" autoPlay="true">
            {
                ads?.map((ad, i) => {
                return(
                    <Paper key={i}>
                        <img src={ad.scr} alt="" width='100%' height='100%'/>
                        <p>{ad.title}</p>
                    </Paper>
                )  
                })
            }
        </Carousel>
    </div>
    

    <div className='main_content'>
        {
            clothes?.map((cloth, i) => (
                <div key={i} className="card" >
                    <div className='card_img'>
                        <img src={cloth.poster} />
                    </div>

                    <div className='card_header' >
                        <h2 className="card_title">{cloth.title}</h2>
                        <p className="price">{cloth.price}<span>{cloth.currency}</span></p>
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