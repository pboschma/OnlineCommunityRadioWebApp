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
        <footer className="music-bar">
            <div className="columns is-mobile">
                <div className="column is-narrow ">
                </div>
                <div className="column is-narrow">
                        {avatarData.map( data => (data.name === radioData.live_dj) ?
                            (<div className="music-bar-head" key={data.name+"head"} style={{backgroundImage: 'url(' + data.head_url + ')'}}/>)
                            : null )}
                </div>
                <div className="column one-quarter">
                     <RadioInfo />
                </div>
                <div className="column is-narrow">
                    <RadioAudioControls />
                </div>
            </div>
        </footer>
    );
}

export default MusicBar;