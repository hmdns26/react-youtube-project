const KEY = '';
import axios from 'axios';


export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3/',
    params:{q:'snippet',
    maxResults:5,
    key:KEY
    }
})
