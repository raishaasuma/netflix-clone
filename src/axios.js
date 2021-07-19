import axios from "axios";

// base URL to make requests to the movie database
// the constant in request is added on to this url to for the full get request
const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3"
});

export default instance;

// ex.) instance.get('/test') will form "https://api.themoviedb.org/3/test"