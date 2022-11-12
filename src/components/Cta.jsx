import React from 'react'

// Cta images
import nft_one from '../images/nfts_image--one.png'
import nft_two from '../images/nfts_image--two.png'
import nft_three from '../images/nfts_image--three.png'

export default function Cta() {
  return (
    <div className='cta'>
        <div className="cta_content">
            <div className="cta_text">
                <h2 id='cta_text--header'>Metabnb NFTs</h2>
                <p id="cta_text--paragraph">Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
                <button className="cta_click">Learn more</button>
            </div>
            <div id="cta_images">
                <img src={nft_one} alt="" className="nft" id="nft_one" />
                <img src={nft_two} alt="" className="nft" id="nft_two" />
                <img src={nft_three} alt="" className="nft" id="nft_three" />
            </div>
        </div>
      
    </div>
  )
}
