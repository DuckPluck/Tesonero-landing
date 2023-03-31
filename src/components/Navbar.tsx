import React from 'react';
import Logo from '../Assets/Logo.svg';

const Navbar = () => {
    const menuOptions = [
        {
            text: 'Pricing',
        },
        {
            text: 'Blog',
        },
        {
            text: 'About',
        },
    ];
    return (
        <header>
            <div className='nav-left'>
                <div className='nav-logo-container'>
                    <a href=''><img src={Logo} alt='' /></a>
                </div>
                <nav className='navbar-links-container' id={'nav-links'}>
                    {menuOptions.map((a) => {
                        return <a href='' key={a.text}>{a.text}</a>
                    })}
                </nav>
            </div>


            <div className='navbar-button-container'>
                <button className='primary-button'>Button</button>
            </div>

        </header>
    );
};

export default Navbar;