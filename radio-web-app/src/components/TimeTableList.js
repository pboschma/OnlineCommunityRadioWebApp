import React, {useState, useEffect} from 'react';
import '../style/time-table.sass'
import {useSelector} from "react-redux";
import TimeTableCard from "./TimeTableCard";

function TimeTableList() {

    const [timeTableDetails, setTimeTableDetails] = useState([]);

    const timeTable = useSelector(state => state.radio.radioDetails.mini_rooster);

    useEffect(() => {
        if ( timeTable && timeTable.length > 0 ){
            setTimeTableDetails(timeTable);
            console.log("TEST")
            console.log(timeTableDetails)
        }
    })


    return(
        <div className="container timetable-container">
            {timeTableDetails.map( details => (<TimeTableCard details={details}/>))}
        </div>
    )
}

export default TimeTableList;