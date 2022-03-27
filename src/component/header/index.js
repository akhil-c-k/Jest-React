import React from 'react';
import './styles.scss'
import Logo from "../../assets/logo.png"

const Header = (props) => {
  return (
  	<header className="headerComponent">
       <div className="wrap">
          <div className="logo">
           <img src={Logo} alt="logo" className="logoIMG"/>
          </div>
       </div>
  	</header>
    
  )
}

export default Header;