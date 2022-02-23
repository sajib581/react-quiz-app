import React, { Fragment } from 'react';
import classes from '../styles/Answers.module.css';
import Checkbox from './Checkbox';

const Answers = ({options=[], handleChange, input}) => {
    return (
        <div className={classes.answers}>
            {
                options.map((option, index) => 
                <Fragment>
                    {
                        input ? <Checkbox 
                        className={classes.answer} 
                        text ={option.title}
                        value={index}
                        checked={option.checked}
                        onChange={(e) => handleChange(e, index)}
                        type="checkbox"  
                        key = {index}              
                     /> : <Checkbox 
                        className={`${classes.answer} ${
                            option.correct ? classes.correct : 
                            option.checked ? classes.wrong : null
                        }`} 
                        text ={option.title}
                        defaultChecked={option.checked}
                        type="checkbox"  
                        key = {index}          
                        disabled    
                  />
                    }
                </Fragment>)
            }
        </div>
    );
}; 

export default Answers;