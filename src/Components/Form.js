import React from 'react';
import classes from '../styles/Form.module.css';

const Form = ({children, className, ...rest}) => {
    return (
        <form className={`${className} ${classes.form}`} {...rest} action="#">
            {children}
        </form>
    );
};

export default Form;