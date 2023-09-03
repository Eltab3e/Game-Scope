import axios from "axios";

const apiClient = () => {
    const defaultOptions = {
        baseURL: process.env.NEXT_PUBLIC_BASE_URL,
        params: {
            key: process.env.NEXT_PUBLIC_API_KEY,
        },
    };

    return axios.create(defaultOptions);
};

export default apiClient();
