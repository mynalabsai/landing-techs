import React from 'react';
import classes from './WhiteBlock.module.css'


const WhiteBlock = ({image, text, anchor}) =>{
    return(
        <a className={classes.container} href={anchor}>
            <img src={image}/>
            <span className={classes.text}>{text}</span>
        </a>
    )
}

export default WhiteBlock;
