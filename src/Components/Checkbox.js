import React from 'react';

const Checkbox = ({text, className, ...rest}) => {
    return (
        <label className={className}> <input {...rest} /> <span>{text}</span> </label>
    );
};

export default Checkbox;