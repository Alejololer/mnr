import axios from "axios";
import { API_SERVER_URL } from "./public-config";

export const fetchContestsLists = async () => {
    const rep = await axios.get(`${API_SERVER_URL}/contests`);
    return rep.data.contests;
}

export const fetchContest = async (contestId) => {
    const rep = await axios.get(`${API_SERVER_URL}/contest/${contestId}`);
    return rep.data.contest;
}

export const addNewNameToContests = async ({contestId, newNameValue}) => {
    const rep = await axios.post(`${API_SERVER_URL}/contest/${contestId}`,
        { newNameValue }
    );
    return rep.data.updatedContest;
}