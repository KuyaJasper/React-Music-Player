import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";
import { playAudio } from "../util";

const Player = ({
  currentSong,
  isPlaying,
  setIsPlaying,
  audioRef,
  setSongInfo,
  songInfo,
  songs,
  setCurrentSong,
  setSongs,
}) => {

//useEffect

useEffect(() => {
        //Add Active State

        const newSongs = songs.map((song)=> {
          if(song.id=== currentSong.id){
              return{
                  ...song,
                  active: true,
              };}
              else{
                  return{
                      ...song,
                      active: false,
                  };
              }
      });
      setSongs(newSongs);
})

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
    //onChange is an input method that tracks the change
    audioRef.current.currentTime = event.target.value;
    setSongInfo({ ...songInfo, currentTime: event.target.value });
  };

  const skipTrackHandler = (direction) => {
    let currentIndex= songs.findIndex((song)=> song.id === currentSong.id);
    if(direction === 'skip-forward'){
      setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    }
    if(direction === 'skip-back'){
      if((currentIndex-1) % songs.length === -1){
        setCurrentSong(songs[songs.length -1]);
        playAudio(isPlaying,audioRef);
        return;
      }
      setCurrentSong(songs[(currentIndex - 1) % songs.length]);
    }
    playAudio(isPlaying,audioRef);
  };

  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <input
          min={0}
          max={songInfo.duration}
          value={songInfo.currentTime}
          type="range"
          onChange={dragHandler}
        />
        <p>{getTime(songInfo.duration || 0)}</p>
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
