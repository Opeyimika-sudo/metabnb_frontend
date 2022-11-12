import React from 'react'

// Footer images
import footer_logo from '../images/footer_metabnb.svg'
import facebook_icon from '../images/facebook_icon.png'
import instagram_icon from '../images/instagram_icon.png'
import twitter_icon from '../images/twitter_icon.png'


export default function Footer() {
  return (
    <div className='footer'>
        <div className="footer_access">
            <div className='footer_logo'>
                <img src={footer_logo} alt="" />
                <div className="footer_socials">
                    <img src={facebook_icon} alt="" className="footer_socials--icon" />
                    <img src={instagram_icon} alt="" className="footer_socials--icon" />
                    <img src={twitter_icon} alt="" className="footer_socials--icon" />
                </div>
            </div>
            <div className='footer_links'>
                <h2 className='footer_text--header'>Community</h2>
                <ul className='footer_text--content'>
                    <li className='footer_text--item'>NFT</li>
                    <li className='footer_text--item'>Tokens</li>
                    <li className='footer_text--item'>Landlords</li>
                    <li className='footer_text--item'>Discord</li>
                </ul>
            </div>
            <div className='footer_links'>
                <h2 className='footer_text--header'>Places</h2>
                <ul className='footer_text--content'>
                    <li className='footer_text--item'>Castle</li>
                    <li className='footer_text--item'>Farms </li>
                    <li className='footer_text--item'>Beach</li>
                    <li className='footer_text--item'>Learn more</li>
                </ul>
            </div>
            <div className='footer_links'>
                <h2 className='footer_text--header'>About us</h2>
                <ul className='footer_text--content'>
                    <li className='footer_text--item'>Road map</li>
                    <li className='footer_text--item'>Creators </li>
                    <li className='footer_text--item'>Career</li>
                    <li className='footer_text--item'>Contact us</li>
                </ul>
            </div>
        </div>
        <p className='copyright'><span>&copy; </span>2022 Metabnb</p>
    </div>
  )
}
