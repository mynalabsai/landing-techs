import React, {useState} from 'react';
import classes from './Footer.module.css'

const Footer = () => {
    return(
        <div className={classes.container}>
            <h2 className={classes.h2}>
                We’re Open <br/>
                for Collabo&shy;ra&shy;tions
            </h2>
            <div className={classes.contacts}>
                <a href={'mailto:contact@mynalabs.ai'}>CONTACT@MYNALABS.AI</a>
            </div>
        </div>
    )
}

export default Footer;
