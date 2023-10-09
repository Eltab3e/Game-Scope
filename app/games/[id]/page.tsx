"use client";

//required
import styled from "styled-components";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { space } from "@/app/layout";
import { UseQueryResult, useQueries } from "@tanstack/react-query";
import { fetchGameById, fetchGameScreenshots } from "@/api/games";
//components
import Error from "@/components/shared/Error";
import Heading from "@/components/shared/Heading";
import Description from "@/components/Game/Description";
import Ratings from "@/components/Game/Ratings";
import Cover from "@/components/Game/Cover";
import Stores from "@/components/Game/Stores";
import Screenshots from "@/components/Game/Screenshots";

interface Params {
    params: {
        id: number;
    };
}

const DetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
`;

const ImagesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const Title = styled.h5`
    color: ${(props) => props.theme.colors.grey};
    font-size: ${(props) => props.theme.fontSizes.h5};
    font-weight: 600;
    line-height: 160%;
`;

const Gallery = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 3rem;
`;

const Game = ({ params: { id } }: Params) => {
    const results: UseQueryResult<any>[] = useQueries({
        queries: [
            { queryKey: ["details", id], queryFn: () => fetchGameById(id) },
            { queryKey: ["screenshots", id], queryFn: () => fetchGameScreenshots(id) },
        ],
    });

    const isLoading = results.some((result) => result.isLoading);
    const error = results.some((result) => result.error);
    const isError = results.some((result) => result.isError);
    const details = results[0].data;
    const screenshots = results[1].data;

    if (isLoading) {
        return (
            <Skeleton
                count={1}
                width={"100%"}
                height={"71rem"}
            />
        );
    }

    if (isError) {
        return <Error />;
    }

    return (
        <DetailsContainer>
            <Cover
                imageUrl={details.background_image}
                alt={details.name}
            />
            <Heading
                main={details.name}
                sub={`Released: ${details.released}`}
            />
            <Description description={details.description} />
            <Stores stores={details.stores} />
            <Ratings
                rating={details.rating}
                ratings={details.ratings}
            />
            <ImagesWrapper>
                <Title className={space.className}>Screenshots:</Title>
                <Gallery>
                    {screenshots.results.map((screenshot: any) => (
                        <Screenshots imageUrl={screenshot.image} />
                    ))}
                </Gallery>
            </ImagesWrapper>
        </DetailsContainer>
    );
};
export default Game;
