import axios from 'axios';
import defaultHost from './app.json';

export const api = axios.create({
    //baseURL: defaultHost
    baseURL: 'http://apicloudcomp.com.iron.hostazul.com.br'
});
