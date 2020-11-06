import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID lKVHA6g6mt5Z4QAf3sSANra4p2OFsNgTqRwBVStoZHU'
    }
});