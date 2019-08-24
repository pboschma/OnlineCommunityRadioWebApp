import React from 'react';
import AvatarsData from "../data/avatars.json";

function TimeTableCard(props) {

    const deejayImages = AvatarsData.data.filter( deejay => deejay.name === props.details.deejay);

    return(
        <div className="box">
            <article className="media">
                <div className="media-left">
                        <div className="timeTableImages" style={{backgroundImage: 'url(' + deejayImages[0].head_url + ')'}}/>
                </div>
                <div className="media-content">
                    <div className="content">
                        <strong>{props.details.deejay}</strong>
                        <p className="is-5">{props.details.hour}</p>
                    </div>
                    <nav className="level is-mobile">
                        <div className="level-left">
                            <p className="level-item" aria-label="retweet">
                            <span className="tag is-danger">Supervisor</span>
                            </p>
                            <p className="level-item" aria-label="retweet">
                            <span className="tag is-info">Radio DJ</span>
                            </p>
                        </div>
                    </nav>
                </div>
            </article>
        </div>
    )
}

export default TimeTableCard;