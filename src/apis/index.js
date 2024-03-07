import apiConfig from "./apiConfig"
import urls from "./urls";

export const login = async (data) => {
    let url = urls.LOGIN;
    const response = await apiConfig.post(url,data);
    return response;
}
