//required
import styled from "styled-components";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { categoryIcons } from "@/constants";
import { useFetchGenres } from "@/shared/hooks/genres/useFetchGenres";
//components
import GenreCard from "@/components/shared/Cards/GenreCard";
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
        <Container id="genres">
            <Heading main="Browse Genres" />

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
                    genres.map((genre: any, index: number) => {
                        return (
                            <GenreCard
                                key={genre.id}
                                name={genre.name}
                                image={genre.image_background}
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
