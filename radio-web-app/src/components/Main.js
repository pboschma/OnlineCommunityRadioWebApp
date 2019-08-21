import React, {useState} from 'react';
import '../style/main.sass';
import DjBox from "./DjBox";
import AvatarsData from "../data/avatars.json";
import {useSelector} from "react-redux";

function Main() {

    const radioData = useSelector(state => state.radio.radioDetails);
    const data =  AvatarsData.data;

    return(
        <section className="hero is-medium">
            <div className="hero-body">
                <div className="container is-fullhd">
                    {data.map( data => ( data.name === radioData.live_dj ) ? ( <DjBox avatar={data.avatar_url}/> ) : null)}
                </div>
            </div>
        </section>
    );

}

export default Main;