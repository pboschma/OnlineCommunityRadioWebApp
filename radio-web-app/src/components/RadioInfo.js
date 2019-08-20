import React, {useState, useEffect} from 'react';
import axios from 'axios';
import config from '../config';

function RadioInfo() {

    const [radioInfo, setRadioInfo] = useState([]);

    useEffect(() => {
        if(radioInfo){
            getRadioDetails();
        }
        const interval = setInterval(() => {
            getRadioDetails();
        }, 2000);
        return () => clearInterval(interval);
    }, []);


    return (<div>{radioInfo.live_dj} : <b>{radioInfo.song}</b>
        <p>{radioInfo.listeners} jonkies die luisteren</p></div>);


    async function getRadioDetails() {
        console.log("API");
        axios.get(config.API_URL + 'stats/info?random=0.55', {})
            .then(response => {
                const radioInfo = response.data.data;
                setRadioInfo(radioInfo);
            }).catch(error => console.log(error));

    }
}

export default RadioInfo;