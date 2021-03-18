var api_uri = "http://127.0.0.1:8000/api/";

export const constants = {
    API_URL: api_uri,
    API: {
        LOGIN: '/login',
        REGISTER: '/register',
    },

    PATTERN: {
        EMAIL: /\S+@\S+\.\S+/,
        EMAIL_NEW: '/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2, 3})+$/i',
        PHONE: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
        URL: /^((http:\/\/www\.)|(https:\/\/www\.)|(http:\/\/)|(https:\/\/)|(www\.))([a-z0-9]+([\-\.]?)+([a-z0-9]+?))+?\.[a-z0-9]{2,5}(:[0-9]{1,5})?(\/.*)?$/,
        PASSWORD: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
        OTP: /^[0-9]{1,4}$/
    }
};
