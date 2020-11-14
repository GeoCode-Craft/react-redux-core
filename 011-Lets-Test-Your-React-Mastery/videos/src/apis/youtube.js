import axios from 'axios';

const KEY = 'AIzaSyASKBRGsexI2HHtz8F9FdoCz7PkH5cu8qs';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults:5,
        key: KEY
    }
});

