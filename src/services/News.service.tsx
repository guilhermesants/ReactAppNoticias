import { api } from './api';
import  api_Key from './app.json';
const moment = require("moment");

const URL_TOPHEADLINES_BR = '/api/News'

export const getTopHeadLines = async (category?: string) => {

    let url = URL_TOPHEADLINES_BR;
    return await api.get(url);
}
