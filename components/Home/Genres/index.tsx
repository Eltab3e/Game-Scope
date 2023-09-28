//required
import styled from "styled-components";
//essential
import { useFetchGenres } from "@/shared/hooks/genres/useFetchGenres";
import { categoryIcons } from "@/constants";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
//components
import CategoryCard from "@/components/shared/Cards/CategoryCard";
import Heading from "@/components/shared/Heading";
import Error from "@/components/shared/Error";

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

const Genres = () => {
    const { data, isLoading, error, isError } = useFetchGenres();

    const genres = data?.results;

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
                {isLoading || !genres ? (
                    Array.from({ length: 8 }).map((_, index) => (
                        <Skeleton
                            key={index}
                            count={1}
                            height={320}
                        />
                    ))
                ) : isError ? (
                    <Error>{(error as Error).message}</Error>
                ) : (
                    genres.map((item: any, index: number) => {
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

export default Genres;
