import axios from 'axios';

export const PERFORM_MATCH = 'PERFORM_MATCH';

export function performMatch(criteria){
    const request = axios.get('https://jsonplaceholder.typicode.com/posts/1');

    return {
        type: PERFORM_MATCH,
        payload: request
    };
}