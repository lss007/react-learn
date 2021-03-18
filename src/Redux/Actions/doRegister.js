import { httpservice } from '../../Services/httpService';
import { constants } from '../../Constant/Constant';
export const doRegister = credential => {
    return httpservice()
        .post(constants.API.REGISTER, credential)
        .then(function (response) {
            if (response.data.token) {
              localStorage.setItem("authToken", JSON.stringify(response.data));
            }
            return response.data;
            console.log(response.data);
        })
        .catch(function (error) {
            return error.response && error.response.data ? error.response.data : error;
        });
};
