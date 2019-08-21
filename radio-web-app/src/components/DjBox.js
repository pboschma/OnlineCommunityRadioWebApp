import React from 'react'
import {useSelector} from "react-redux";

function DjBox(props) {

    const radioDetails = useSelector( state => state.radio.radioDetails);

    return(
        <>
        <div className="box">
            <article className="media">
                <div className="media-left">
                    <figure className="image is-100x100">
                        <img src={props.avatar} />
                    </figure>
                </div>
                <div className="media-content">
                    <div className="content">
                    </div>
                    <nav className="level is-mobile">
                        <div className="level-left">
                            <h3> {radioDetails.live_dj}
                                {radioDetails.listeners}</h3>

                        </div>
                    </nav>
                </div>
            </article>
        </div>
            </>
    );

}

export default DjBox;