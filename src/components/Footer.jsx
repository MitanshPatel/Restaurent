import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, faReddit } from '@fortawesome/free-brands-svg-icons'
import footerCss from '../astyles/Footer.module.css'

function Footer() {
  return (
    <div className={footerCss.foot}>
      <div className={footerCss.icons}>
        <FontAwesomeIcon className={footerCss.icon} icon={faInstagram} size="xl" />
        <FontAwesomeIcon className={footerCss.icon} icon={faTwitter} size="xl" />
        <FontAwesomeIcon className={footerCss.icon} icon={faReddit} size="xl" />
      </div>
      <p className={footerCss.copyright}>Copyright © La Cuisine Magique</p>
    </div>
  )
}

export default Footer;
