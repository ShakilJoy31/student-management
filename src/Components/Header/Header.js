import React from 'react';
import headerLogo from '../assets/LOGO (1).png'
import user from '../assets/user.svg'
import './Header.css'; 

const Header = () => {
    return (
        <div className='mx-12 mt-6'>
            <div className='flex justify-between items-center'>
                <img src={headerLogo} alt="" />
                <div className='flex justify-center items-center user-email'>
                    <img src={user} alt="" />
                    <p>username@resoluteai.in</p>
                </div>
            </div>
        </div>
    );
};

export default Header;