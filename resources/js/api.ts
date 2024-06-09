import axios, { AxiosError, AxiosResponse } from 'axios';
import { NavigateOptions } from '@tanstack/react-router';

declare global {
    interface Window {
        axios: typeof axios;
    }
}

window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

const api = axios.create({
    baseURL: '/api',
});

// Interceptor to attach the token to every request
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('api_token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

const addResponseInterceptor = (navigate: (options: NavigateOptions) => void) => {
    api.interceptors.response.use(
        (response: AxiosResponse) => response,
        (error: AxiosError) => {
            if (error.response && error.response.status === 401) {
                console.log('logging user out');
                // Token has expired or user is unauthorized
                localStorage.removeItem('api_token');
                // Redirect to login page
                // navigate({ to: '/' }); can't get navigate to work here for some reason
                window.location.href = "/login" // this works
            }
            return Promise.reject(error);
        }
    );
};

export { addResponseInterceptor };
export { api };
