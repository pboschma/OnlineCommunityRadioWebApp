import React, {useState, useEffect} from 'react';
import config from '../config';
import '../style/radio-audio-controls.sass'


function RadioAudioControls() {

    const [isPlaying, setIsPlaying] = useState(null);
    const radioStream = document.getElementById("radioStream");
    const playButton = "fas fa-play is-size-3 spacing";
    const pauseButton = "fas fa-pause is-size-3 spacing";

    let url = config.RADIO_URL;


    useEffect(() => {
    }, []);

    function playRadio() {
        if(!isPlaying){
        setIsPlaying(true);
        radioStream.play();
        }else {
            setIsPlaying(null);
            radioStream.pause();

        }
    }


    function increaseVolume() {
        if(radioStream.volume <= 0.9)
        radioStream.volume += 0.1;
    }

    function decreaseVolume() {
        if(radioStream.volume >= 0.1)
        radioStream.volume -= 0.1;
    }

    return(
            <div className="audio-controls is-pulled-right">
            <audio id="radioStream" src={url}>{null}</audio>
            <i className={!isPlaying ? playButton : pauseButton} onClick={ () => playRadio()}>{null}</i>
            <i className="fas fa-plus is-size-6 spacing is-hidden-mobile has-text-grey-light" onClick={ () => increaseVolume()}>{null}</i>
            <i className="fas fa-minus is-size-6 spacing is-hidden-mobile has-text-grey-light" onClick={ () => decreaseVolume()}>{null}</i>
            </div>
    );
}

export default RadioAudioControls;