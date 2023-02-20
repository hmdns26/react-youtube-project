const KEY = 'AIzaSyCqas00vsCtosfbm2GXGi_mXJF6j0wHy1Y';
import axios from 'axios';


export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3/',
    params:{'snippet',
    maxResults:5,
    key:KEY
    }
})