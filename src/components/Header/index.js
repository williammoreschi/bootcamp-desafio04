import React from 'react';
import './styles.css';
import Logo  from '../../assets/facebook.svg';
function Header(){
  return(
    <>
    <header id="header">
    <nav>
    <a href="javascritp:void(0);"><img src={Logo} alt="Facebook"/></a>
    <a href="javascritp:void(0);">Meu Perfil</a>
    </nav>
    </header>
    </>
  )
}
export default Header;