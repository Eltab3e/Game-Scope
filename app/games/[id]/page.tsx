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
import Heading from "@/components/shared/Heading";
import { space } from "@/app/layout";

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

const ImageWrapper = styled.div`
    position: relative;
    overflow: hidden;
    height: 56rem;
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
`;

const Title = styled.h5`
    color: ${(props) => props.theme.colors.grey};
    font-size: ${(props) => props.theme.fontSizes.h5};
    font-weight: 600;
    line-height: 160%;
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const Text = styled.p`
    font-size: ${(props) => props.theme.fontSizes.base};
    font-weight: 400;
    line-height: 160%;
`;

const Link = styled.a`
    color: #007bff;
    margin-left: 5px;
    text-decoration: underline;
    cursor: pointer;
`;

const Avatar = styled.div`
    position: relative;
    width: 2.5rem;
    height: 2.5rem;
`;

const Additionals = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const AdditionalsWrapper = styled.div`
    display: flex;
    gap: 1rem;
`;

const Game = ({ params: { id } }: Params) => {
    const [showFullDescription, setShowFullDescription] = useState(false);

    const { data, isLoading, error, isError } = useFetchGameById(id);

    const cleanDescription = data?.description
        ? data.description.replace(/<p>|<\/p>|<br\s*\/?>/g, "")
        : "";

    const maxCharacters = 500;
    const shortDescription = cleanDescription.slice(0, maxCharacters);
    const fullDescription = cleanDescription;

    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    };

    return (
        <Wrapper>
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

                        <TextWrapper>
                            <Heading
                                main={data.name}
                                sub={`Released: ${data.released}`}
                            />

                            <Info>
                                <Title className={space.className}>Available On:</Title>
                                <Text>
                                    {data.platforms
                                        .map((platform: any) => platform.platform.name)
                                        .join(", ")}
                                </Text>
                            </Info>

                            <Info>
                                <Title className={space.className}>Description:</Title>
                                <Text>
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
                                </Text>
                            </Info>

                            <Info>
                                <Title className={space.className}>
                                    Ratings: (Overall {data.rating}/5)
                                </Title>
                                <Additionals>
                                    {data.ratings.map((rating: any) => (
                                        <AdditionalsWrapper>
                                            <Avatar>
                                                {data.rating > 3 ? (
                                                    <Image
                                                        src={"/icons/Star.svg"}
                                                        alt="star"
                                                        fill
                                                    />
                                                ) : (
                                                    <Image
                                                        src={"/icons/Halfstar.svg"}
                                                        alt="half star"
                                                        fill
                                                    />
                                                )}
                                            </Avatar>
                                            <Text>
                                                {rating.count} voted {rating.title}.
                                            </Text>
                                        </AdditionalsWrapper>
                                    ))}
                                </Additionals>
                            </Info>
                        </TextWrapper>
                    </>
                )}
            </Container>
        </Wrapper>
    );
};

export default Game;
