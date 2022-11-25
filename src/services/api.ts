import axios from 'axios';
import defaultHost from './app.json';

export const api = axios.create({
    //baseURL: defaultHost
    baseURL: 'https://newsapi.org/v2'
});
