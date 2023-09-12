import { useQuery } from "@tanstack/react-query";
import { fetchCreators } from "@/api/creators";

export const useFetchCreators = () => {
    return useQuery(["creators"], () => fetchCreators());
};
