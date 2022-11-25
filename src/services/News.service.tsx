import { api } from './api';
import  api_Key from './app.json';
const moment = require("moment");

const URL_TOPHEADLINES_BR = '/top-headlines?country=br'

export const getTopHeadLines = async (category?: string) => {
    //let url = `${URL_TOPHEADLINES_BR}&apiKey=${api_Key}`;
    let url = `${URL_TOPHEADLINES_BR}&apiKey=`;
    //category ? url = url + `&category=${category}` : null;
    if (category !== undefined){
        url = url + `&category=${category}`;
    } 
    return await api.get(url);
}
