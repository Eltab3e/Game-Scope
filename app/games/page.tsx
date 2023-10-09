"use client";

//required
import Image from "next/image";
import styled from "styled-components";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { fetchAllGames } from "@/api/games";
import { useInfiniteQuery } from "@tanstack/react-query";
//components
import Error from "@/components/shared/Error";
import GameCard from "@/components/shared/Cards/GameCard";
import Button from "@/components/shared/Button";
import Heading from "@/components/shared/Heading";

const DetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
`;

const Gallery = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
`;

const ButtonWrapper = styled.div`
    align-self: center;
    display: flex;
    width: 24.7rem;
    padding-top: 4rem;
`;

const RocketIcon = () => (
    <Image
        src="/icons/Rocket.svg"
        alt="icon"
        width={20}
        height={20}
    />
);

const Games = () => {
    const fetchGames = ({ pageParam = 1 }: { pageParam?: number }) => fetchAllGames(pageParam);

    const { data, isLoading, isError, fetchNextPage, hasNextPage, isFetchingNextPage } =
        useInfiniteQuery(["games"], fetchGames, {
            getNextPageParam: (lastPage) => lastPage?.next || null,
        });

    // Flatten the paginated data
    const games = data?.pages.flatMap((page) => page.results) || [];

    const loadMoreGames = () => {
        fetchNextPage();
    };

    return (
        <DetailsContainer>
            <Heading main="All Games:" />

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
                    <Error />
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
                                id={game.id}
                                name={game.name}
                                image={game.background_image}
                                screenshots={screenshots}
                                platforms={platforms}
                            />
                        );
                    })
                )}
            </Gallery>

            {hasNextPage && (
                <ButtonWrapper>
                    <Button
                        fullwidth
                        variant="outline"
                        height="secondary"
                        preIcon={RocketIcon}
                        onClick={loadMoreGames}
                    >
                        {isFetchingNextPage
                            ? "Loading more..."
                            : hasNextPage
                            ? "Load More"
                            : "Nothing more to load"}
                    </Button>
                </ButtonWrapper>
            )}
        </DetailsContainer>
    );
};

export default Games;
