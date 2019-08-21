import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config';
import '../style/het-geluid.sass'

function HetGeluid() {

    const [hetGeluidAttempts, setHetGeluidAttempts ] = useState([]);

    useEffect(() => {
        getAllHetGeluidTries();
    }, []);

    return(
        <table className="table is-scrollable">
            <thead>
            <tr>
                <th>Antwoord</th>
                <th>Bc pot</th>
            </tr>
            </thead>
            <tbody>
            {hetGeluidAttempts.map( attempt => (
                <tr>
                    <td>{attempt.answer}</td>
                    <td>{attempt.win_value}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );


    async function getAllHetGeluidTries(){

        axios.get( config.HET_GELUID_URL )
            .then( response => {
                const hetTempGeluidData = response.data.data;
                console.log(hetTempGeluidData);
                setHetGeluidAttempts(hetTempGeluidData);
            })
            .catch( error => console.log(error));
    }
}

export default HetGeluid;