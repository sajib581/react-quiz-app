import React, { useMemo } from 'react';
import successImage from '../assets/success.png';
import useFetch from '../hooks/useFetch';
import classes from '../styles/Summery.module.css';
const Summery = ({score, noq}) => {
  console.log("Summery");

  const getKeyword = useMemo(() => {
    if((score/(noq*5)) * 100 < 50){
      return "failed"
    }else if((score/(noq*5)) * 100 < 75){
      return "good"
    }else if((score/(noq*5)) * 100 < 100){
      return "very good"
    }else{
      return "excellent"
    }
  }, [])

  const {loading, error, result} = useFetch(`https://api.pexels.com/v1/search?query=${getKeyword}&per_page=1`, 'GET', {
    "Authorization" : process.env.REACT_APP_PIXELS_API_KEY
  })

  const image = result ? result?.photos[0]?.src?.medium : successImage
  
    return (
        <div className={classes.summary}>
          <div className={classes.point}>
            {/* progress bar will be placed here  */}
            <p className={classes.score}>
              Your score is <br />
              {score} out of {noq*5}
            </p>
          </div>
          {loading && <div className={classes.badge}>Loading your badge</div> }
          {error && <div className={classes.badge}>An error has occurred</div> }
          
          <div className={classes.badge}>
            <img src={image} alt="Success" />
          </div>
        </div>
    );
};

export default Summery;