export const Interseptor = {
    requestHandler(request) {
        return request;
    },
    errorHandler(error) {
        return Promise.reject({...error});
    },
    successHandler(response) {
        return response;
    }
};
