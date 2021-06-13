import React, {useRef, useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({currentSong, isPlaying, setIsPlaying}) => {
//Ref <======== (this is used to connect the HTML element like a querySelector from JavaScrip)
const audioRef =useRef(null)

//Event Handlers
const playSongHandler = () =>{
  // console.log(audioRef.current); <=== best practice to see if useRef is working as intended

  if(isPlaying){
     // .pause/ .play  method is built into the audio tag.
     // setIsPlaying(!isPlaying) is a true/false function using the states passed down as props
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
  }else{
    audioRef.current.play();
    setIsPlaying(!isPlaying);
  }
};

const timeHandler = (event) =>{
const current = event.target.currentTime;
const duration = event.target.duration;
setSongInfo({...songInfo, currentTime: current, duration});
};

const getTime= (time) => {
  return(
    //formats time into seconds and minutes
    Math.floor(time / 60) + ":" + ("0" + Math.floor(time%60)).slice(-2)
  );
};

//State
const [songInfo,setSongInfo] = useState({
  currentTime: null,
  duration: null,
})

  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <input type="range" />
        <p>{getTime(songInfo.duration)}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon className="skip-back" icon={faAngleLeft} size="2x" />
        <FontAwesomeIcon onClick={playSongHandler} className="play" icon={faPlay} size="2x" />
        <FontAwesomeIcon
          className="skip-forward"
          icon={faAngleRight}
          size="2x"
        />
      </div>
      {/* onTimeupdate is uniqure to audio like onCLick */}
      <audio onTimeUpdate={timeHandler} onLoadedMetadata={timeHandler} ref={audioRef} src={currentSong.audio}></audio>
    </div>
  );
};

export default Player;