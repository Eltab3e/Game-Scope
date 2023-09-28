//required
import apiClient from "../../shared/api";

export const fetchStores = (page = 1, page_size = 3) => {
    return apiClient
        .get(`/stores?page=${page}&page_size=${page_size}`)
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            throw err;
        });
};
