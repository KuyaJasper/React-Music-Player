//This file was written by my brother when we had the input for the slider set to "onClick" instead of "onChange"


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
