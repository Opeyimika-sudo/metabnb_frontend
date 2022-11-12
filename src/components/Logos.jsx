import React from 'react'

// Company Logos
import mbtoken_logo from '../images/mbtoken_logo.png'
import metamask_logo from '../images/metamask_logo.png'
import opensea_logo from '../images/opensea_logo.png'

export default function Logos() {
  return (
      <div className="companies_logos">
        <div className="company_logo">
            <img src={mbtoken_logo} alt="" className="company" />
            <p id="mbtoken_text">MBToken</p>
        </div>
        <div className="company_logo">
            <img src={metamask_logo} alt="" className="company" />
            <p id="metamask_text">METAMASK</p>
        </div>
        <div className="company_logo">
            <img src={opensea_logo} alt="" className="company" />
            <p id="opensea_text">OpenSea</p>
        </div>
      </div>
  )
}
