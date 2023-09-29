//required
import styled from "styled-components";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useFetchAllGames } from "@/shared/hooks/games/useFetchAllGames";
//components
import Heading from "@/components/shared/Heading";
import GameCard from "@/components/shared/Cards/GameCard";
import Error from "@/components/shared/Error";
import Button from "@/components/shared/Button";
import Image from "next/image";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6rem;
`;

const HeadingContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ButtonWrapper = styled.div`
    align-self: flex-end;
    display: flex;
    width: 24.7rem;
`;

const Gallery = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
`;

const RocketIcon = () => (
    <Image
        src="/icons/Rocket.svg"
        alt="icon"
        width={20}
        height={20}
    />
);

const Trending = () => {
    const { data, isLoading, error, isError } = useFetchAllGames();

    const games = data?.results;

    return (
        <Container id="tranding">
            <HeadingContainer>
                <Heading
                    main="Trending Games"
                    sub="Checkout Our Weekly Updated Trending Games."
                />

                <ButtonWrapper>
                    <Button
                        fullwidth
                        variant="outline"
                        height="secondary"
                        preIcon={RocketIcon}
                    >
                        Browse Games
                    </Button>
                </ButtonWrapper>
            </HeadingContainer>

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
                    games.map((game: any) => {
                        const screenshots = game.short_screenshots
                            .slice(1, 4)
                            .map((image: any) => image.image);

                        const platforms = game.parent_platforms
                            .slice(0, 4)
                            .map((platform: any) => platform.platform.name)
                            .join(", ");

                        return (
                            <GameCard
                                key={game.id}
                                name={game.name}
                                image={game.background_image}
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
