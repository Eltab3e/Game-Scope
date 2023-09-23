//required
import styled from "styled-components";
//essential
import { useFetchAllGames } from "@/shared/hooks/games/useFetchAllGames";
//components
import Heading from "@/components/shared/Heading";
import CollectionCard from "@/components/shared/Cards/CollectionCard";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6rem;
`;

const Gallery = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
`;

const Trending = () => {
    const { data, isLoading, error, isError } = useFetchAllGames();

    const games = data?.results;

    return (
        <Container>
            <Heading
                main="Trending Games"
                sub="Checkout Our Weekly Updated Trending Collection."
            />

            <Gallery>
                {isLoading ? (
                    <h1>Loading</h1>
                ) : (
                    games.map((item: any) => {
                        const screenshots = item.short_screenshots
                            .slice(1, 4)
                            .map((image: any) => image.image);
                        return (
                            <CollectionCard
                                key={item.id}
                                name={item.name}
                                background_image={item.background_image}
                                screenshots={screenshots}
                            />
                        );
                    })
                )}
            </Gallery>
        </Container>
    );
};

export default Trending;
