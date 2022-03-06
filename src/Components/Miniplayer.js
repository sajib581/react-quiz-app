import { useRef, useState } from 'react';
import ReactPlayer from 'react-player/youtube';
import classes from '../styles/Miniplayer.module.css';

const Miniplayer = ({id, title}) => {
  const buttonRef = useRef();
  const [status, setStatus] = useState(false)

  const toggleMiniplayer = () => {
    if(!status) {
      setStatus(true);
    }else {
      setStatus(false);
    }
  }
    return (
        <div className={!status ? `${classes.miniPlayer} ${classes.floatingBtn}` :  `${classes.miniPlayer}` } ref={buttonRef} onClick={toggleMiniplayer}>
          <span className={`material-icons-outlined ${classes.open}`}> play_circle_filled </span>
          <span className={`material-icons-outlined ${classes.close}`} onClick={toggleMiniplayer}> close </span>
          < ReactPlayer 
                url={`https://www.youtube.com/watch?v=${id}`}
                width="300px" 
                height="168px"
                playing={status}                 
                controls
             />
          <p>{title}</p>
        </div>
    );
};

export default Miniplayer;