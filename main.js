import { minimalFetch } from './minimal-fetch.js';

(async () => {
    try {
        const data = await minimalFetch('https://jsonplaceholder.typicode.com/todos/1', {}, 3000);
        console.log('Fetched data:', data);
    } catch (error) {
        console.error('Error:', error.message);
    }
})();
