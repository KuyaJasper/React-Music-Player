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
    //onClick is an input method that tracks where the mouse clicks within the div
    //getElementsByClassName returns an array of element objects
    //  since there is only one elements named time-control we get the first element of the array 
    const element = document.getElementsByClassName('time-control');
    //getBoundClientRect returns a rectangle object of the div in question 
    //  x is the left most x coordinate 
    //  right is the right most x coordinate 
    const rect = element[0].getBoundingClientRect();
    var x = event.clientX;
    //alter each by 63.88 pixels to take into consideration the timestamps on the left and right
    var left = rect.x + 63.88;
    var right = rect.right - 63.88;
    //we can caltulate what percent of the song you are trying to access by doing the following 
    //  position of click - position of the left most coordinate of the scroll bar
    //  divided by the overall width of the scroll bar
    var percent = ((x-left)/(right-left));
    //from there we multiply the total length of the song by the perecentage 
    var setTime = percent * event.target.max;
    audioRef.current.currentTime = setTime;
    setSongInfo({ ...songInfo, currentTime: setTime});
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
