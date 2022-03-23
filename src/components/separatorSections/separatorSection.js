import React from 'react';
import classes from './separatorSection.module.css'
import star from '../../image/separatorSection/star.svg'
import dot from '../../image/separatorSection/dot.svg'

const SeparatorSection = ({id}) =>{
    return(
        <div className={classes.container} id={id}>
            <img src={star} className={classes.star}/>
            <img src={dot} className={classes.dot}/>
            <img src={dot} className={classes.dot}/>
            <img src={dot} className={classes.dot}/>
            <img src={dot} className={classes.dot}/>
        </div>
    )
}

export default SeparatorSection;
