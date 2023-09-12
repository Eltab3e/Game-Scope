import apiClient from "../../shared/api";

export const fetchCreators = (page = 1, page_size = 12) => {
    return apiClient
        .get(`/developers?page=${page}&page_size=${page_size}`)
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            throw err;
        });
};
