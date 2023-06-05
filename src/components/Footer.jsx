import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, faReddit } from '@fortawesome/free-brands-svg-icons'


function Footer() {
  return (
    <div className='foot'>
      <div className='icons'>
        <FontAwesomeIcon className='icon' icon={faInstagram} size="xl" />
        <FontAwesomeIcon className='icon' icon={faTwitter} size="xl" />
        <FontAwesomeIcon className='icon' icon={faReddit} size="xl" />
      </div>
      <p className='copyright'>Copyright © La Cuisine Magique</p>
    </div>
  )
}

export default Footer;
