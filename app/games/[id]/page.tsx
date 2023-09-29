"use client";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useFetchGameById } from "@/shared/hooks/games/useFetchGameById";
import Image from "next/image";
import styled from "styled-components";
import Error from "@/components/shared/Error";

interface Params {
    params: {
        id: number;
    };
}

const Container = styled.div`
    flex: 0.5;
    display: flex;
    flex-direction: column;
`;

const ImageWrapper = styled.div`
    position: relative;
    overflow: hidden;
    height: 41rem;
    border-radius: 2rem 2rem 0 0;
`;

const TextWrapper = styled.div`
    background-color: ${(props) => props.theme.colors.secondaryBg};
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
    border-radius: 0 0 2rem 2rem;
`;

const Title = styled.h5`
    font-size: ${(props) => props.theme.fontSizes.h5};
    font-weight: 600;
    line-height: 140%;
`;

const Info = styled.div`
    display: flex;
    align-items: center;
    gap: 1.2rem;
`;

const Avatar = styled.div`
    position: relative;
    width: 2.5rem;
    height: 2.5rem;
`;

const Name = styled.p`
    font-size: ${(props) => props.theme.fontSizes.base};
    font-weight: 400;
    line-height: 140%;
`;

const Released = styled.p`
    margin-left: auto;
    font-size: ${(props) => props.theme.fontSizes.base};
    font-weight: 400;
    line-height: 140%;
`;

const Game = ({ params: { id } }: Params) => {
    const { data, isLoading, error, isError } = useFetchGameById(id);
    console.log("data", data);

    return (
        <Container>
            {isLoading ? (
                <Skeleton
                    count={1}
                    width={630}
                    height={410}
                />
            ) : isError ? (
                <Error>{(error as Error).message}</Error>
            ) : (
                <>
                    <ImageWrapper>
                        <Image
                            src={data.background_image}
                            alt={data.name}
                            width={600}
                            height={410}
                            priority
                        />
                    </ImageWrapper>

                    <TextWrapper>
                        <Title>{data.name}</Title>
                        <Info>
                            <Avatar>
                                <Image
                                    src={"/icons/List.svg"}
                                    alt="icon"
                                    fill
                                />
                            </Avatar>
                            {/* <Name>Platforms: {data.platforms}</Name>
                            <Released>Release Date: {data.released}</Released> */}
                        </Info>
                    </TextWrapper>
                </>
            )}
        </Container>
    );
};

export default Game;
