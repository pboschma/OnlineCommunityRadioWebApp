import React from 'react';
import '../style/main.sass';
import DjBox from "./DjBox";
import AvatarsData from "../data/avatars.json";
import {useSelector} from "react-redux";

function Main() {

    const radioData = useSelector(state => state.radio.radioDetails);
    const data =  AvatarsData.data;

    return(
        <section className="hero is-medium-with-nav">
            <div className="hero-body">
                <div className="box" style={{boxShadow: 'unset'}}>
                    {data.map( data => ( data.name === radioData.live_dj ) ? ( <DjBox avatar={data.avatar_url} key="1" /> ) : null)}
                </div>
            </div>
        </section>
    );

}

export default Main;