export const playAudio = (isPlaying, audioRef) => {

        //checks if the song is playing
        if(isPlaying){
            const playPromise = audioRef.current.play();
            if(playPromise !== undefined){
                playPromise.then((audio) => {
                    audioRef.current.play();
                });
            }
        }
};

