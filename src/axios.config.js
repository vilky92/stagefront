import axios from "axios";
import auth from "@/utils/auth.js";

axios.defaults.baseURL = "http://localhost:8181";

axios.interceptors.request.use(config => {
    // Do something before request is sent...
    // les bodys des reqHTTP partent au format json ...
    const localAuthToken = auth.getLocalToken();
    //config.withCredentials = true;
    // 'Access-Control-Allow-Origin': '*',
    //config.headers["Access-Control-Allow-Origin"] = "*";
    // on essaie de récupérer le token d'auth
    config.headers["Content-Type"] = "application/json"; console.log("MON HEADER",config.headers);
    // si le token existe, on l'envoie dans l'entête de chaque reqHTTP
    if (localAuthToken) config.headers["Authorization"] = localAuthToken; console.log("Ma config header", config.headers["Authorization"])
    return config;

}, error => {
    // Do something with request error
    return Promise.reject(error);
});

export default axios.defaults;