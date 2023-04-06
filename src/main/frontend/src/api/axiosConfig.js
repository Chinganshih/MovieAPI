import axios from "axios";

export default axios.create({
    baseURL:'https://ec2-3-21-247-234.us-east-2.compute.amazonaws.com:8443',
    //baseURL:'https://localhost:8443',
    //headers: {"ngrok-skip-browser-warning": "true"}
})