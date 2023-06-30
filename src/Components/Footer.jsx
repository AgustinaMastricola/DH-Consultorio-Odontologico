import React from 'react'
import { rutes } from '../utils/rutes'

const Footer = () => {
  return (
    <footer>
        <p>Powered by</p>
        <img src={rutes.logo_dhfooter} alt='DH-logo' />
        <img src={rutes.logo_face} alt="Facebook" />
        <img src={rutes.logo_inst} alt="Instagram" />
        <img src={rutes.logo_tik} alt="TikTok" />
        <img src={rutes.logo_what}alt="Whatsapp" />
    </footer>
  )
}

export default Footer