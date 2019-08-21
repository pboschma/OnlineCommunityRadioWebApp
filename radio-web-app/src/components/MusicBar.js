import React from 'react';
import RadioInfo from "./RadioInfo";
import RadioAudioControls from "./RadioAudioControls";
import '../style/music-bar.sass';
import AvatarData from '../data/avatars';
import {useSelector} from "react-redux";

function MusicBar() {

    const radioData = useSelector(state => state.radio.radioDetails);
    const avatarData = AvatarData.data;

    return(
        <footer className="footer">
            <div className="columns is-mobile">
                <div className="column">
                    {avatarData.map( data => (data.name === radioData.live_dj) ? (<img className="music-bar-head" src={data.head_url}/>) : null )}

                </div>
                <div className="column">
            <RadioInfo />
                </div>
                <div className="column">
            <RadioAudioControls />
                </div>
            </div>
        </footer>
    );
}

export default MusicBar;