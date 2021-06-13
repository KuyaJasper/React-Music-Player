import React, {useRef, useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({currentSong, isPlaying, setIsPlaying}) => {
//Ref (this is used to connect the HTML element like a querySelector from JavaScrip)
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
}

//State
const [songInfo,setSongInfo] = useState({
  currentTime: null,
  duration: null,
})

  return (
    <div className="player">
      <div className="time-control">
        <p>Start Time</p>
        <input type="range" />
        <p>End Time</p>
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
      <audio 
      //onTimeupdate is uniqure to audio like onCLick
      onTimeUpdate={timeHandler} ref={audioRef} src={currentSong.audio}></audio>
    </div>
  );
};

export default Player;