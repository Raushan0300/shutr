import axios from "axios";

const baseURL = 'http://localhost:8000';

const getData = async (url: string, customHeaders:any) => {
    try {
        const response = await axios.get(`${baseURL}/${url}`, { headers: customHeaders });
    return response.data;
    } catch (error:any) {
        return error.response.data;
    };
};

const postData = async (url: string, data: any, customHeaders:any) => {
    try {
        const response = await axios.post(`${baseURL}/${url}`, data, { headers: customHeaders });
    return response.data;
    } catch (error:any) {
        return error.response.data;
    };
};

const putData = async (url: string, data: any, customHeaders:any) => {
    try {
        const response = await axios.put(`${baseURL}/${url}`, data, { headers: customHeaders });
    return response.data;
    } catch (error:any) {
        return error.response.data;
    };
};

const deleteData = async (url: string, customHeaders:any) => {
    try {
        const response = await axios.delete(`${baseURL}/${url}`, { headers: customHeaders });
    return response.data;
    } catch (error:any) {
        return error.response.data;
    };
};

export { getData, postData, putData, deleteData };