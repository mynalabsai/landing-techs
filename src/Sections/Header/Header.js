import React from 'react';
import classes from './Header.module.css'

//import assets
import logo from '../../image/logo.svg'
import contactsIcon from '../../image/icon-tappable.svg'

const Header = ({matches}) =>{
    return(
        <div className={classes.container}>
            <a href={'/'} style={matches ? {width: '100%', display: 'flex', justifyContent:'center'}:{}}><img  src={logo} alt="logo" className={classes.logo}/></a>
            <a className={classes.mobileEmail} href={'mailto:contact@mynalabs.ai'}><img src={contactsIcon} alt="contactsIcon"/></a>

            <a  href={'mailto:contact@mynalabs.ai'} className={classes.email}>contact@mynalabs.ai</a>

        </div>
    )
}

export default Header;
