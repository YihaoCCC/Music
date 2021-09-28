import { BASE_URL, TIME_OUT } from "./config";
import axios from "axios";

const yhrequest = axios.create(
    {
        baseURL: BASE_URL,
        timeout: TIME_OUT
    }
)

yhrequest.interceptors.response.use( (res) => {
        return res.data
    }   
)

export default yhrequest