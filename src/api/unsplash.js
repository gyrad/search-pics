import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 3fe5285f38195ff9e15b9d1eaeb2a4e544b47be9837aac84799d9cb8551c6edb'
    }
});