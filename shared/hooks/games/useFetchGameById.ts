//required
import { useQuery } from "@tanstack/react-query";
import { fetchGameById } from "@/api/games";

export const useFetchGameById = (id: any) => {
    return useQuery(["game", id], () => fetchGameById(id));
};
