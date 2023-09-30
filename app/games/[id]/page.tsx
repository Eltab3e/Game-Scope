"use client";

//required
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useFetchGameById } from "@/shared/hooks/games/useFetchGameById";
import Image from "next/image";
import styled from "styled-components";
//components
import Wrapper from "@/hoc/Wrapper";
import Error from "@/components/shared/Error";
import { useState } from "react";

interface Params {
    params: {
        id: number;
    };
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const ImageWrapper = styled.div`
    position: relative;
    overflow: hidden;
    height: 70vh;
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const Title = styled.h5`
    font-size: ${(props) => props.theme.fontSizes.h2};
    font-weight: 600;
    line-height: 140%;
`;

const Info = styled.div`
    display: flex;
    align-items: center;
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

const Link = styled.a`
    color: #007bff; /* Change the color to your preferred link color */
    text-decoration: underline;
    cursor: pointer;
    margin-left: 5px; /* Add some spacing between the links and text */
`;

const Game = ({ params: { id } }: Params) => {
    const [showFullDescription, setShowFullDescription] = useState(false);

    const { data, isLoading, error, isError } = useFetchGameById(id);

    const cleanDescription = data?.description ? data.description.replace(/<p>|<\/p>/g, "") : "";

    const maxCharacters = 500;
    const shortDescription = cleanDescription.slice(0, maxCharacters);
    const fullDescription = cleanDescription;

    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    };

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
                            fill
                            priority
                        />
                    </ImageWrapper>

                    <Wrapper>
                        <TextWrapper>
                            <Title>{data.name}</Title>
                            <Info>
                                <Name>
                                    Story:
                                    <br />
                                    {showFullDescription ? (
                                        <>
                                            {fullDescription}.
                                            <Link onClick={toggleDescription}>Show Less</Link>
                                        </>
                                    ) : (
                                        <>
                                            {shortDescription}
                                            {cleanDescription.length > maxCharacters && (
                                                <Link onClick={toggleDescription}>Show More</Link>
                                            )}
                                        </>
                                    )}
                                </Name>
                            </Info>
                        </TextWrapper>
                    </Wrapper>
                </>
            )}
        </Container>
    );
};

export default Game;
