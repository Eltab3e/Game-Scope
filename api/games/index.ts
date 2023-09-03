import apiClient from "../../shared/api";

export const fetchAllGames = (page = 1, page_size = 9) => {
    return apiClient
        .get(`/games?page=${page}&page_size=${page_size}`)
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            throw err;
        });
};
