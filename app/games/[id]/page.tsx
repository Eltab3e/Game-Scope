"use client";

//required
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { space } from "@/app/layout";
import { useFetchGameById } from "@/shared/hooks/games/useFetchGameById";
//components
import Wrapper from "@/hoc/Wrapper";
import Error from "@/components/shared/Error";
import Heading from "@/components/shared/Heading";

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

const Info = styled.div`
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

const Text = styled.p`
    font-size: ${(props) => props.theme.fontSizes.base};
    line-height: 160%;
`;

const Links = styled.p`
    font-size: ${(props) => props.theme.fontSizes.base};
    line-height: 160%;
    text-decoration: underline;
    cursor: pointer;
`;

const Show = styled.a`
    color: ${(props) => props.theme.colors.purple};
    margin-left: 5px;
    text-decoration: underline;
    cursor: pointer;
`;

const Avatar = styled.div`
    position: relative;
    width: 2.5rem;
    height: 2.5rem;
`;

const More = styled.div`
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
                        width={1120}
                        height={560}
                    />
                ) : isError ? (
                    <Error>{(error as Error).message}</Error>
                ) : (
                    <ImageWrapper>
                        <Image
                            src={data.background_image}
                            alt={data.name}
                            fill
                            priority
                        />
                    </ImageWrapper>
                )}

                {isLoading ? (
                    <Skeleton
                        count={3}
                        width={630}
                        height={100}
                        style={{ marginTop: "30px" }}
                    />
                ) : isError ? (
                    <Error>{(error as Error).message}</Error>
                ) : (
                    <>
                        <Heading
                            main={data.name}
                            sub={`Released: ${data.released}`}
                        />

                        <Info>
                            <Title className={space.className}>Description:</Title>
                            <Text>
                                {showFullDescription ? (
                                    <>
                                        {fullDescription}.
                                        <Show onClick={toggleDescription}>Show Less</Show>
                                    </>
                                ) : (
                                    <>
                                        {shortDescription}
                                        {cleanDescription.length > maxCharacters && (
                                            <Show onClick={toggleDescription}>...Show More</Show>
                                        )}
                                    </>
                                )}
                            </Text>
                        </Info>

                        <Info>
                            <Title className={space.className}>Available On:</Title>
                            {data.stores.map((store: any) => (
                                <More>
                                    <Avatar>
                                        <Image
                                            src={"/icons/Hash.svg"}
                                            alt="star"
                                            fill
                                        />
                                    </Avatar>
                                    <Links>
                                        <Link
                                            href={`https://${store.store.domain}`}
                                            target="_blank"
                                        >
                                            {store.store.name}
                                        </Link>
                                    </Links>
                                </More>
                            ))}
                        </Info>

                        <Info>
                            <Title className={space.className}>
                                Ratings: (Overall {data.rating}/5)
                            </Title>
                            {data.ratings.map((rating: any) => (
                                <More>
                                    <Avatar>
                                        <Image
                                            src={"/icons/People.svg"}
                                            alt="star"
                                            fill
                                        />
                                    </Avatar>
                                    <Text>
                                        {rating.count} voted {rating.title}.
                                    </Text>
                                </More>
                            ))}
                        </Info>
                    </>
                )}
            </Container>
        </Wrapper>
    );
};

export default Game;
