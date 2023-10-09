//required
import { useQuery } from "@tanstack/react-query";
import { fetchAllGames } from "@/api/games";

export const useFetchAllGames = (page = 1) => {
    return useQuery(["games", page], () => fetchAllGames(page));
};
