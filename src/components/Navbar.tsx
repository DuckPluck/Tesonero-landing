import React from 'react';
import Logo from '../Assets/Logo.svg'

const Navbar = () => {
    const menuOptions = [
        {
            text: 'NavItem1',
        },
        {
            text: 'NavItem2',
        },
        {
            text: 'NavItem3',
        },
    ];
    return (
        <nav>
            <div className='nav-left'>
                <div className='nav-logo-container'>
                    <a href=''><img src={Logo} alt='' /></a>
                </div>
                <div className='navbar-links-container'>
                    {menuOptions.map((a) => {
                        return <a href='' key={a.text}>{a.text}</a>
                    })}
                </div>
            </div>


            <div className='navbar-button-container'>
                <button className='primary-button'>Button</button>
            </div>

        </nav>
    );
};

export default Navbar;