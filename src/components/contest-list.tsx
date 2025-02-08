import axios from "axios";
import ContestPreview from "./contest-preview";
import { API_SERVER_URL } from "../public-config";
import { useEffect, useState } from "react";
import { fetchContestsLists } from "../api-client";
import Header from "./header";

const ContestList = ({initialContests, onContestClick}) => {
    const [contests, setContests] = useState(initialContests ?? []);
    useEffect(() => {
        if(!initialContests)
        {    
            fetchContestsLists().then((contests) => {
            setContests(contests)});
        }
    }, []);
    return (
        <>
            <Header message="Naming Contests"/>
            <div className="contest-list">
                {contests.map((contest) => {
                    return <ContestPreview key = {contest.id} contest = {contest} onClick = {onContestClick}/>
                })}
            </div>
        </>
    );
};

export default ContestList;