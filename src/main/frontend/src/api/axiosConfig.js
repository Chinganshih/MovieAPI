import axios from "axios";

export default axios.create({
    baseURL:'https://moviereview.chingan.info:8443',
    //baseURL:'https://localhost:8443',
    withCredentials: false,
    headers: {
        "Access-Control-Allow-Origin": "*"
    }
})