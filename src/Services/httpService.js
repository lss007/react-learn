import { Interseptor } from './Interseptor';
import { constants } from '../Constant/Constant';

const axios = require('axios');
const instanceUrl = axios.create({
    baseURL: constants.API_URL,
    transformRequest: [
        function (data, headers) {
            if (localStorage['authToken']) {
                headers['Authorization'] = 'Bearer ' + localStorage['authToken'];
            }
            return JSON.stringify(data);
        }
    ],
    headers: {
        'Content-Type': 'application/json',
    }
});

/**
 * httpservice for get and post json formatted data
 * @returns {*}
 */
export const httpservice = () => {
    instanceUrl.interceptors.request.use(request => Interseptor.requestHandler(request));
    instanceUrl.interceptors.response.use(
        response => Interseptor.successHandler(response),
        error => Interseptor.errorHandler(error)
    );
    return instanceUrl;
};

/**
 * httpserviceWithMultipart for sending form data
 * @param method
 * @param usersInfo
 * @param url
 * @returns {never}
 */
export const httpserviceWithMultipart = (method, payload, url) => {
    const headers = {
        'Content-Type': 'multipart/form-data',
    }
    if (localStorage['authToken']) {
        headers['Authorization'] = 'Bearer ' + localStorage['authToken'];
    }
    const sendMulipartRequest = axios({
        method: method,
        url: url,
        headers,
        data: payload
    });
    return sendMulipartRequest;
};
