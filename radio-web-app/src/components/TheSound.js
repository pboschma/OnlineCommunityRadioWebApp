import React , {useState, useEffect} from 'react';
import TheSoundCard from "./TheSoundCard";
import axios from "axios";
import config from "../config";
import "../style/the-sound.sass"

function TheSound() {

    const [theSoundGuessedAnswers, setTheSoundGuessedAnswers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");


    useEffect(() => {
        getGuessedAnwersOfTheSound()
    }, []);

    function updateSearchTerm(event) {
        if(event.target.value.toString().length >= 3){
            //setSearchTerm(event.target.toString());
        }
    }

    return (
        <div className="container timetable-container">
            <nav className="panel">
                <p className="panel-heading">
                    Ingestuurde antwoorden
                </p>
                <div className="panel-block">
                    <p className="control has-icons-left">
                        <input className="input is-small" type="text" placeholder="zoek antwoord" onChange={updateSearchTerm}/>
                            <span className="icon is-small is-left">
                                <i className="fas fa-search" aria-hidden="true"></i>
                            </span>
                    </p>
                </div>
                <div className="panel answers">
                {theSoundGuessedAnswers.map( detail => (
                    <TheSoundCard details={detail}/>
                    ))}
                </div>
            </nav>
        </div>
    );
    
    async function getGuessedAnwersOfTheSound() {
        console.log("HETGELUID");
        axios.get(config.HET_GELUID_URL)
            .then( response => {
                const tempGeussedAnswers = response.data.data;
                setTheSoundGuessedAnswers(tempGeussedAnswers);
            })
    }
}

export default TheSound;