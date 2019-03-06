import React from 'react';

import Logo from '../../../assets/images/logo.svg';
import Perfil from '../../../assets/images/perfil.jpg';

import './Navbar.scss';

const navbar = () => (
    <nav className='navbar'>
        <div>
            <img src={Logo} alt="logo" className='navbar__logo'/>
            <ul className='navbar__list'>
                <li className='navbar__element'>home</li>
                <li className='navbar__element'>equipe</li>
            </ul>
        </div>
        <img src={Perfil} alt="perfil" className='navbar__perfil'/>
    </nav>
);

export default navbar;