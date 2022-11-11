import React from 'react'
import hero_img1 from '../images/hero_image--one.png'
import hero_img2 from '../images/hero_image--two.png'
import hero_img3 from '../images/hero_image--three.png'
import hero_img4 from '../images/hero_image--four.png'

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero_text">
        <h2 id="hero_text--header">Rent a <span id="span_style">Place</span> away from <span id="span_style">Home</span> in the <span id="span_style">Metaverse</span></h2>
        <p id="hero_text--paragraph">we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
        <form className='form'>
            <input type="text" placeholder='Search for location' id="input" />
            <button type="submit" id="submit">Search</button>
        </form>
      </div>
      <div className="hero_img">
        <img src={hero_img1} alt="" id="hero_img1"/>
        <img src={hero_img2} alt="" id="hero_img2"/>
        <img src={hero_img3} alt="" id="hero_img3"/>
        <img src={hero_img4} alt="" id="hero_img4"/> 
      </div>
    </div>
  )
}
