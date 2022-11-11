import React from 'react'
import logo from '../images/metabnb_logo.png'
import logo_img from '../images/metabnb_logo--img.png'

export default function Header() {
  return (
    <div className="header">
      <div className="metabnb_logo">
        <img src={logo_img} alt="metabnb" />
        <img src={logo} alt="metabnb" />
      </div>
      <nav>
        <ul className='navbar_items'>
          <li className='navbar_item'>Home</li>
          <li className='navbar_item'>Place to stay</li>
          <li className='navbar_item'>NFTs</li>
          <li className='navbar_item'>Community</li>
        </ul>
      </nav>
      <button id="navbar_button">Connect wallet</button>
    </div>
  )
}
