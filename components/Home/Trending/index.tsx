//required
import styled from "styled-components";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useFetchAllGames } from "@/shared/hooks/games/useFetchAllGames";
//components
import Heading from "@/components/shared/Heading";
import GameCard from "@/components/shared/Cards/GameCard";
import Error from "@/components/shared/Error";

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
        <Container id="tranding">
            <Heading
                main="Trending Games"
                sub="Checkout Our Weekly Updated Trending Games."
            />

            <Gallery>
                {isLoading || !games ? (
                    Array.from({ length: 9 }).map((_, index) => (
                        <Skeleton
                            key={index}
                            count={1}
                            height={400}
                            style={{ marginTop: "30px" }}
                        />
                    ))
                ) : isError ? (
                    <Error>{(error as Error).message}</Error>
                ) : (
                    games.map((item: any) => {
                        const screenshots = item.short_screenshots
                            .slice(1, 4)
                            .map((image: any) => image.image);

                        const platforms = item.parent_platforms
                            .slice(0, 4)
                            .map((platform: any) => platform.platform.name)
                            .join(", ");

                        return (
                            <GameCard
                                key={item.id}
                                name={item.name}
                                image={item.background_image}
                                screenshots={screenshots}
                                platforms={platforms}
                            />
                        );
                    })
                )}
            </Gallery>
        </Container>
    );
};

export default Trending;
