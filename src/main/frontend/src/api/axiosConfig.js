import axios from "axios";

export default axios.create({
   //baseURL:'https://moviereview.chingan.info:8443',
    baseURL:'https://localhost:8443',
    headers: {
        "Access-Control-Allow-Origin": "*",
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Credentials':true,
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    }
})