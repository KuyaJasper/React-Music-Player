import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({
  isPlaying,
  setIsPlaying,
  audioRef,
  setSongInfo,
  songInfo,
  songs,
  setCurrentSong,
  setSongs,
  currentSong,
}) => {

//useEffect

useEffect(() => {
        //Add Active State
      audioRef.current[isPlaying ? "play" : "pause"]();
},[isPlaying,currentSong,audioRef])

  //Event Handlers


  const playSongHandler = () => {
    // console.log(audioRef.current); <=== best practice to see if useRef is working as intended

    if (isPlaying) {
      // .pause/ .play  method is built into the audio tag.
      // setIsPlaying(!isPlaying) is a true/false function using the states passed down as props
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const getTime = (time) => {
    return (
      //formats time into seconds and minutes
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  const dragHandler = (event) => {
    audioRef.current.currentTime = event.target.value;
    setSongInfo({ ...songInfo, currentTime: event.target.value });
  };


  const skipTrackHandler = async (direction) => {
    let currentIndex= songs.findIndex((song)=> song.id === currentSong.id);
    if(direction === 'skip-forward'){
      await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    }
    if(direction === 'skip-back'){
      if((currentIndex-1) % songs.length === -1){
        await setCurrentSong(songs[songs.length -1]);
        if(isPlaying) audioRef.current.play();
        return;
      }
      await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
    }
    if(isPlaying) audioRef.current.play();
  };

    //Add the styles
    const trackAnimation = {
      transform: `translateX(${songInfo.animationPercentage}%)`,
    };

  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <div style={{background: `linear-gradient(to right, ${currentSong.color[0]},${currentSong.color[1]})`}} className="track">
        <input
          min={0}
          max={songInfo.duration || 0}
          value={songInfo.currentTime}
          onClick={dragHandler}
          type="range"
        />
        <div style={trackAnimation} className="animate-track"></div>
        </div>
        <p>{songInfo.duration ? getTime(songInfo.duration) : "0:00"}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          onClick={() => skipTrackHandler("skip-back")}
          className="skip-back"
          icon={faAngleLeft}
          size="2x"
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          //? and : is a turnerary operator to invoke the icons
          icon={isPlaying ? faPause : faPlay}
          size="2x"
        />
        <FontAwesomeIcon
          onClick={() => skipTrackHandler("skip-forward")}
          className="skip-forward"
          icon={faAngleRight}
          size="2x"
        />
      </div>
    </div>
  );
};

export default Player;
