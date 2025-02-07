import axios from "axios";
import { API_SERVER_URL } from "./public-config";

export const fetchContests = async () => {
    const rep = await axios.get(`${API_SERVER_URL}/contests`);
    return rep.data.contests;
}