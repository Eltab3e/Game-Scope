import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "@/api/categories";

export const useFetchCategories = () => {
    return useQuery(["categories"], () => fetchCategories());
};
