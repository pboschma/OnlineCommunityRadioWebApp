import React, {useState, useEffect} from 'react';
import axios from 'axios';
import config from '../config';
import {useDispatch} from "react-redux";

function RadioInfo() {

    const [radioDetails, setRadioDetails] = useState([]);
    const [hetGeluidData, setHetGeluidData ] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
        if(radioDetails){
            getRadioDetails();
        }
        const interval = setInterval(() => {
            getRadioDetails();
        }, 10000);
        return () => clearInterval(interval);
    }, []);

    function dispatchRadioDetails(tempRadioDetails) {
        dispatch({
            type: 'UPDATE_RADIO_DETAILS',
            payload: tempRadioDetails
        })
    }


    return (<div>{radioDetails.live_dj} : <b>{radioDetails.song}</b>
        <p>{radioDetails.listeners} jonkies die luisteren</p>
    </div>
    );



    async function getRadioDetails() {
        console.log("API");
        axios.get(config.API_URL + 'stats/info?random=0.55', {})
            .then(response => {
                const tempRadioDetails = response.data.data;
                setRadioDetails(tempRadioDetails);
                dispatchRadioDetails(tempRadioDetails);
            }).catch(error => console.log(error));
    }


}

export default RadioInfo;