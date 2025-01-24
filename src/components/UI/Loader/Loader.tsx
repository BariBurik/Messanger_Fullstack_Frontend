import React from "react";
import classes from './Loader.module.scss'

const Loader = () => {
    return (
        <div className={classes.wrap}>
            <div className={classes.loader}/>
        </div>
    )
}
export default Loader;