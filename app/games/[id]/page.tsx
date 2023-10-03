"use client";

//required
import styled from "styled-components";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useFetchGameById } from "@/shared/hooks/games/useFetchGameById";
//components
import Wrapper from "@/hoc/Wrapper";
import Error from "@/components/shared/Error";
import Heading from "@/components/shared/Heading";
import Description from "@/components/Game/Description";
import Ratings from "@/components/Game/Ratings";
import Cover from "@/components/Game/Cover";
import Stores from "@/components/Game/Stores";

interface Params {
    params: {
        id: number;
    };
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
`;

const Game = ({ params: { id } }: Params) => {
    const { data, isLoading, error, isError } = useFetchGameById(id);

    return (
        <Wrapper>
            {isLoading ? (
                <Skeleton
                    count={1}
                    width={"100%"}
                    height={"71rem"}
                />
            ) : isError ? (
                <Error>{(error as Error).message}</Error>
            ) : (
                <Container>
                    <Cover
                        imageUrl={data.background_image}
                        alt={data.name}
                    />
                    <Heading
                        main={data.name}
                        sub={`Released: ${data.released}`}
                    />
                    <Description description={data.description} />
                    <Stores stores={data.stores} />
                    <Ratings
                        rating={data.rating}
                        ratings={data.ratings}
                    />
                </Container>
            )}
        </Wrapper>
    );
};

export default Game;
