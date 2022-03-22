import React from 'react';

import classes from './Header.module.css'

import logo from '../../image/logo.svg'
import contactsIcon from '../../image/icon-tappable.svg'

const Header = () =>{
    return(
        <div className={classes.container}>
            <img src={logo} alt="logo" className={classes.logo}/>
            <a className={classes.mobileEmail} href={'mailto:contact@mynalabs.ai'}><img src={contactsIcon} alt="contactsIcon"/></a>
            <a  href={'mailto:contact@mynalabs.ai'} className={classes.email}>contact@mynalabs.ai</a>
        </div>
    )
}

export default Header;
