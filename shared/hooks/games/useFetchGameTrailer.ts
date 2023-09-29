//required
import { useQuery } from "@tanstack/react-query";
import { fetchGameTrailer } from "@/api/games";

export const useFetchGameTrailer = (id: number) => {
    return useQuery(["trailer", id], () => fetchGameTrailer(id));
};
