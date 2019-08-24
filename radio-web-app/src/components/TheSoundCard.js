import React from 'react';

function TheSoundCard(props) {

    return(
        <div className="panel-block has-text-left">
    <span className="panel-icon">
    </span>
            {props.details.answer}
        </div>
    );
}

export default TheSoundCard;