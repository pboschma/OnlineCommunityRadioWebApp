import React from 'react'
import {useSelector} from "react-redux";
import '../style/dj-box.sass'

function DjBox(props) {

    const beginHour = new Date().getHours();
    const endHour = beginHour + 1;
    const radioDetails = useSelector( state => state.radio.radioDetails);

    return(
            <div className="columns is-tablet">
                <div className="column dj-avatar is-one-third">
                    <div className="avatar" style={{backgroundImage: 'url(' + props.avatar + ')'}}></div>
                </div>
                <div className="column content details">
                    <h1 className="title is-size-5-mobile">DJ {radioDetails.live_dj}</h1>
                    <div className="tags">
                        <span className="tag is-info">Radio DJ</span>
                    </div>
                    <h2 className="subtitle is-5">{beginHour}:00 - { endHour }:00</h2>
                    <nav className="level">
                        <div className="level-item has-text-centered">
                            <div>
                                <p className="heading">Luisteraars</p>
                                <p className="title">{radioDetails.listeners}</p>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
    );

}

export default DjBox;