import axios from "axios";
import ContestPreview from "./contest-preview";
import { API_SERVER_URL } from "../public-config";
import { useEffect, useState } from "react";
import { fetchContests } from "../api-client";

const ContestList = ({initialContests}) => {
    const [contests, setContests] = useState(initialContests);
    useEffect(() => {
        // fetchContests().then((contests) => {
        //     setContests(contests);
        // });
    }, []);
    return (
        <div className="contest-list">
            {contests.map((contest) => {
                return <ContestPreview key = {contest.id} contest = {contest}/>
            })}
        </div>
    );
};

export default ContestList;