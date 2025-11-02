import axios from "axios";
import Config from "@config";
const instance = axios.create({
    baseURL:Config.apiHost,
    timeout:10000,
    headers:{'Content-Type':'application/json'}
});
instance.interceptors.request.use(function(config){
    return config;
},function(error){
    return Promise.reject(error);
});
instance.interceptors.response.use(function(response){
    return response;
},function(error){
    return Promise.reject(error);
});
export default instance;