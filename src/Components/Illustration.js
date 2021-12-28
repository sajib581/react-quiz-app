import React from 'react';
import images from '../assets/signup.svg';
import classes from '../styles/Illustration.module.css';

const Illustration = () => {
    return (
        <div className={classes.illustration}>
            <img src={images} alt="Signup" />
          </div>
    );
};

export default Illustration;