//required
import { useQuery } from "@tanstack/react-query";
import { fetchGameScreenshots } from "@/api/games";

export const useFetchGameScreenshots = (id: number) => {
    return useQuery(["screenshots", id], () => fetchGameScreenshots(id));
};
