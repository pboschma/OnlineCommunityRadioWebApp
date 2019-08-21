import React from 'react';
import config from '../config';

function RadioAudioControls() {

    return(
        <div>
            <audio controls>
                <source src={config.RADIO_URL} type="audio/ogg" />
            </audio>
        </div>);
}

export default RadioAudioControls;