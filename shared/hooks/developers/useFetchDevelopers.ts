//required
import { useQuery } from "@tanstack/react-query";
import { fetchDevelopers } from "@/api/developers";

export const useFetchDevelopers = () => {
    return useQuery(["developers"], () => fetchDevelopers());
};
