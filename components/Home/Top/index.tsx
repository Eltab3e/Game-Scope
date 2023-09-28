//required
import styled from "styled-components";
import Image from "next/image";
//essential
import { useFetchDevelopers } from "@/shared/hooks/developers/useFetchDevelopers";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
//components
import Button from "@/components/shared/Button";
import ArtistCard from "@/components/shared/Cards/ArtistCard";
import Heading from "@/components/shared/Heading";
import Error from "@/components/shared/Error";

const Container = styled.div`
    color: ${(props) => props.theme.colors.white};
    display: flex;
    flex-direction: column;
    gap: 6rem;
`;

const TextContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ButtonContainer = styled.div`
    width: 24.7rem;
    display: flex;
    align-items: flex-end;
`;

const Gallery = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
`;

const Icon = () => (
    <Image
        src="/icons/RocketLaunch.svg"
        alt="user"
        width={20}
        height={20}
    />
);

const Top = () => {
    const { data, isLoading, error, isError } = useFetchDevelopers();
    console.log("creators", data);
    const developers = data?.results;

    return (
        <Container>
            <TextContainer>
                <Heading
                    main="Top Creators"
                    sub="Checkout Top Rated Creators On NFT Marketplace."
                />

                <ButtonContainer>
                    <Button
                        fullwidth
                        variant="outline"
                        height="secondary"
                        preIcon={Icon}
                    >
                        View Rankings
                    </Button>
                </ButtonContainer>
            </TextContainer>

            <Gallery>
                {isLoading || !developers ? (
                    Array.from({ length: 12 }).map((_, index) => (
                        <Skeleton
                            key={index}
                            count={1}
                            height={220}
                        />
                    ))
                ) : isError ? (
                    <Error>{(error as Error).message}</Error>
                ) : (
                    developers.map((developer: any) => (
                        <ArtistCard
                            key={developer.id}
                            name={developer.name}
                            count={developer.games_count}
                            image={developer.image_background}
                        />
                    ))
                )}
            </Gallery>
        </Container>
    );
};

export default Top;
