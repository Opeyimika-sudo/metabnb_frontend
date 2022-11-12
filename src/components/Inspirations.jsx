import React from 'react'

// Inspiration Images
import inspiration_image_one from '../images/inspiration_image--one.png'
import inspiration_image_two from '../images/inspiration_image--two.png'
import inspiration_image_three from '../images/inspiration_image--three.png'
import inspiration_image_four from '../images/inspiration_image--four.png'
import inspiration_image_five from '../images/inspiration_image--five.png'
import inspiration_image_six from '../images/inspiration_image--six.png'
import inspiration_image_seven from '../images/inspiration_image--seven.png'
import inspiration_image_eight from '../images/inspiration_image--eight.png'

// Star for ratings
import star from '../images/star.png'

export default function Inspirations() {
    const inspirationImages = [
        inspiration_image_one, inspiration_image_two,
        inspiration_image_three, inspiration_image_four, inspiration_image_five, inspiration_image_six, inspiration_image_seven, inspiration_image_eight
    ];
    
    const Inspirations =inspirationImages.map((item) => (
            <div className='card'>
                    <img src={item} alt="" className='card_image' />
                    <div className="card_text">
                        <p>Desert king</p>
                        <p id="bolden">1MBT per night</p>
                    </div>
                    <div className="card_text">
                        <p>2345km away</p>
                        <p>available for 2weeks stay</p>
                    </div>
                    <div className='star_rating'>
                        <img src={star} alt="" className="star" />
                        <img src={star} alt="" className="star" />
                        <img src={star} alt="" className="star" />
                        <img src={star} alt="" className="star" />
                        <img src={star} alt="" className="star" />
                    </div>        
            </div>
    ));
  return (
    <div className='inspirations'>
        <h2 id="inspirations_text">Inspiration for your next adventure</h2>
        <div className='cards'>
            {Inspirations}
        </div>
        
    </div>
    
  )
}
