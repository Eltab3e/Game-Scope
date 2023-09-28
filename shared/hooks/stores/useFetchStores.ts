//required
import { useQuery } from "@tanstack/react-query";
import { fetchStores } from "@/api/stores";

export const useFetchStores = () => {
    return useQuery(["stores"], () => fetchStores());
};
