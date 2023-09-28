import apiClient from "../../shared/api";

export const fetchGenres = (page = 1, page_size = 8) => {
    return apiClient
        .get(`/genres?page=${page}&page_size=${page_size}`)
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            throw err;
        });
};
