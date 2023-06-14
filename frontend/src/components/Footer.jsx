import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, faReddit } from '@fortawesome/free-brands-svg-icons'
import footerCss from '../astyles/Footer.module.css'

function Footer() {
  return (
    <div className={footerCss.foot}>
    <svg className={footerCss.wavi} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffd700" fill-opacity="1" d="M0,32L40,53.3C80,75,160,117,240,144C320,171,400,181,480,160C560,139,640,85,720,80C800,75,880,117,960,117.3C1040,117,1120,75,1200,74.7C1280,75,1360,117,1400,138.7L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
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
