import { useQuery } from "@tanstack/react-query";
import { fetchGenres } from "@/api/genres";

export const useFetchGenres = () => {
    return useQuery(["genres"], () => fetchGenres());
};
