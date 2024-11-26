import axios from "axios";

let BaseUrl ='http://localhost:5000/api/v1';

export let  AxiosApi=axios.create({
    baseURL:BaseUrl
})