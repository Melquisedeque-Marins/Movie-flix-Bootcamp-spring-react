import axios, { AxiosRequestConfig } from "axios";
import qs from "qs";
import history from './history'

type LoginResponse = {
    access_token: string;
    token_type: string;
    expires_in: number;
    scope: string;
    userFirstName: string;
    userId: number;
}


export const BASE_URL = 'https://movieflix-devsuperior.herokuapp.com';

const tokenKey = 'authData';

const CLIENT_ID = 'myclientid';

const CLIENT_SECRET = 'myclientsecret';

type LoginData = {
    username: string;
    password: string;
}

export const requestBackendLogin = (loginData : LoginData) => {
    const headers = {
        'Content-Type' : 'application/x-www-form-urlencoded',
        Authorization: 'Basic ' + window.btoa(CLIENT_ID + ':' + CLIENT_SECRET)
    };

    const data = qs.stringify( {
        ...loginData,
        grant_type : 'password'
    });

    return axios({method: 'POST', baseURL: BASE_URL, url: '/oauth/token', data, headers});
}

export const requestBackend = (config: AxiosRequestConfig) => {
    const headers = config.withCredentials ? {
        ...config.headers,
        Authorization: 'Bearer ' + getAuthData().access_token
    } : config.headers; 


    return axios({ ...config, baseURL: BASE_URL, headers });
}

export const saveAuthData = (obj : LoginResponse) => {
    localStorage.setItem(tokenKey, JSON.stringify(obj));
}

export const getAuthData = () => {
    const str = localStorage.getItem(tokenKey) ?? "{}";
    return JSON.parse(str) as LoginResponse;
}

export const removeAuthData = () => {
    localStorage.removeItem(tokenKey);
}


axios.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});

axios.interceptors.response.use(function (response){
    return response;
}, function (error) {
    if (error.response.status === 401 ) {
        history.push('/');
    }
    return Promise.reject(error);
});