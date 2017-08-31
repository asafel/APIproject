import axios from 'axios'

export function fetchData() {
    
    const url = 'http://jsonplaceholder.typicode.com/comments';
    const request = axios.get(url);

    return {
        type: 'FETCH_DATA',
        payload: request
    };
}