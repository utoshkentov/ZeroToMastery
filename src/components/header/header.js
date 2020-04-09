import React from 'react';
import {Link} from "react-router-dom";

import {ReactComponent as Logo} from '../../assets/animal.svg'

import "./header.scss"

const Header = (props) => {
    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo
                    style={{width: '70px', height: '70px', margin: '0', padding: '0'}}
                    className='logo'
                />
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>
                    Shop
                </Link>
                <Link className='option' to='/contact'>
                    Contact
                </Link>
            </div>
        </div>
    );
};

export default Header;