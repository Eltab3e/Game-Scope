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
import Image from "next/image";
import Button from "@/components/shared/Button";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6rem;
`;

const TextContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ButtonContainer = styled.div`
    width: 24.7rem;
    display: flex;
    align-items: flex-end;
`;

const Cards = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
`;

const MagnifyingGlassIcon = () => (
    <Image
        src="/icons/MagnifyingGlass.svg"
        alt="user"
        width={20}
        height={20}
    />
);

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
            <TextContainer>
                <Heading main="Game Genres" />
                <ButtonContainer>
                    <Button
                        fullwidth
                        variant="outline"
                        height="secondary"
                        preIcon={MagnifyingGlassIcon}
                    >
                        More Genres
                    </Button>
                </ButtonContainer>
            </TextContainer>

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
                                count={genre.games_count}
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
