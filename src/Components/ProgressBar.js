import React, { useRef, useState } from "react";
import classes from "../styles/ProgressBar.module.css";
import Button from "./Button";

const ProgressBar = ({ next, prev, progress, submit }) => {
    const tooltipRef = useRef(null);
    const [toolTip, setToolTip] = useState(false)
    const toggleToolTip = () => {
        if(toolTip) {
            setToolTip(false)
            tooltipRef.current.style.display = 'none'
        }else {
            setToolTip(true)
            tooltipRef.current.style.display = 'block'
            tooltipRef.current.style.left = `calc(${progress}% - 65px)`
        }
    }
    return (
        <div className={classes.progressBar}>
            <div className={classes.backButton} onClick={prev}>
                <span className="material-icons-outlined"> arrow_back </span>
            </div>
            <div className={classes.rangeArea}>
                <div className={classes.tooltip}
                    onMouseOver={toggleToolTip}
                    onMouseOut={toggleToolTip}
                    ref={tooltipRef}
                >{progress}% Complete!</div>
                <div className={classes.rangeBody}>
                    <div 
                        className={classes.progress} 
                        style={{ width: `${progress}%` }}
                        onMouseOver={toggleToolTip}
                        onMouseOut={toggleToolTip}
                    ></div>
                </div>
            </div>

            <Button className={classes.next} onClick={progress === 100 ? submit : next} >
                <span>{progress === 100 ? 'Submit' : 'Next'}</span>
                <span className="material-icons-outlined"> arrow_forward </span>
            </Button>
        </div>
    );
};

export default ProgressBar;
