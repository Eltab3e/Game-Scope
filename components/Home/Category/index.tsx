//required
import styled from "styled-components";
//essential
import { useFetchCategories } from "@/shared/hooks/categories/useFetchCategories";
import { categoryIcons } from "@/constants";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
//components
import CategoryCard from "@/components/shared/Cards/CategoryCard";
import Heading from "@/components/shared/Heading";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6rem;
`;

const Cards = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
`;

const Category = () => {
    const { data, isLoading, error, isError } = useFetchCategories();

    const categories = data?.results;

    // Function to get the icon URL for a category based on its index
    const getIconUrlByIndex = (index: number) => {
        if (index < categoryIcons.length) {
            return categoryIcons[index].iconUrl;
        }
        return null;
    };

    return (
        <Container>
            <Heading main="Browse Category" />

            <Cards>
                {isLoading ? (
                    <Skeleton
                        count={3}
                        height={40}
                        style={{ marginTop: "30px" }}
                    />
                ) : (
                    categories.map((item: any, index: number) => {
                        return (
                            <CategoryCard
                                key={item.id}
                                name={item.name}
                                image_background={item.image_background}
                                iconUrl={getIconUrlByIndex(index)}
                            />
                        );
                    })
                )}
            </Cards>
        </Container>
    );
};

export default Category;
