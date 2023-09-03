import { useQuery } from "@tanstack/react-query";
import { fetchAllGames } from "@/api/games";

export const useFetchAllGames = () => {
    return useQuery(["games"], () => fetchAllGames());
};
