import { Platform } from "react-native";



const apiMainURL = "localhost:8000"

const putFormData = async (url, data) => {
    try {
        const URL = apiMainURL + url
        const headers = setAuthorizationHeader(url);
        if (Platform.OS !== "web") {
            headers["Content-Type"] = "multipart/form-data";
        }
        console.log("rech here " + JSON.stringify(data));
        console.log(URL);
        return await fetch(URL, {
            method: "PUT",
            headers: {
                ...headers,
            },
            body: data,
        }).then((res) => res.json()).catch((err) => console.log(err));
    } catch (error) {
        console.log(JSON.stringify(error));
        return Promise.reject({
            error: true,
            errorText: error,
            errorCode: 0,
        });
    }
};

const postFormData = async (url, data) => {
    try {
        const URL = apiMainURL + url
        const headers = setAuthorizationHeader(url);
        return await fetch(URL, {
            method: "POST",
            headers: {
                ...headers,
            },
            body: data,
        }).then((res) => res.json());
    } catch (error) {
        console.log(error);
        return Promise.reject({
            error: true,
            errorText: "Something went wrong!",
            errorCode: 0,
        });
    }
};

const post = async (url, data, headerData = {}) => {
    3
    try {
        const URL = apiMainURL + url
        const headers = setAuthorizationHeader(url);
        return await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                ...headers,
                ...headerData,
            },
            body: JSON.stringify(data),
        }).then((res) => res.json());
    } catch (error) {
        return Promise.reject({
            error: true,
            errorText: "Something went wrong!",
            errorCode: 0,
        });
    }
};

const put = async (url, data) => {
    try {
        const URL = apiMainURL + url
        const headers = setAuthorizationHeader(url);
        return await fetch(URL, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                ...headers,
            },
            body: JSON.stringify(data),
        }).then((res) => res.json());
    } catch (error) {
        return Promise.reject({
            error: true,
            errorText: "Something went wrong!",
            errorCode: 0,
        });
    }
};

const delete_service = async (url) => {
    try {
        const URL = apiMainURL + url
        const headers = setAuthorizationHeader(url);
        return await fetch(URL, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                ...headers,
            },
        })
            .then((res) => res.json())
            .catch((error) => {
                let errorText = "Something went wrong!";
                return Promise.reject({
                    error: error,
                    errorText: errorText,
                    errorCode: 0,
                });
            });
    } catch (error) {
        return Promise.reject({
            error: true,
            errorText: "Something went wrong!",
            errorCode: 0,
        });
    }
};

const get = async (url) => {
    try {
        const URL = apiMainURL + url
        const headers = setAuthorizationHeader(url);
        return await fetch(URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                ...headers,
            },
        })
            .then((res) => res.json())
            .catch((error) => {
                let errorText = "Something went wrong!";
                return Promise.reject({
                    error: error,
                    errorText: errorText,
                    errorCode: 0,
                });
            });
    } catch (error) {
        return Promise.reject({
            error: true,
            errorText: "Something went wrong!",
            errorCode: 0,
        });
    }
};

export default {
    post,
    get,
    put,
    delete: delete_service,
    postFormData,
    putFormData,
};
