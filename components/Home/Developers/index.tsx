//required
import styled from "styled-components";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useFetchDevelopers } from "@/shared/hooks/developers/useFetchDevelopers";
//components
import Button from "@/components/shared/Button";
import DeveloperCard from "@/components/shared/Cards/DeveloperCard";
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

const EyeIcon = () => (
    <Image
        src="/icons/Eye.svg"
        alt="user"
        width={20}
        height={20}
    />
);

const Developers = () => {
    const { data, isLoading, isError } = useFetchDevelopers();

    const developers = data?.results;

    return (
        <Container>
            <TextContainer>
                <Heading
                    main="Top Developers"
                    sub="Checkout Top Rated Game Developers."
                />

                <ButtonContainer>
                    <Button
                        fullwidth
                        variant="outline"
                        height="secondary"
                        preIcon={EyeIcon}
                    >
                        View Developers
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
                    <Error />
                ) : (
                    developers.map((developer: any, index: number) => (
                        <DeveloperCard
                            key={developer.id}
                            name={developer.name}
                            count={developer.games_count}
                            image={developer.image_background}
                            ranking={index + 1}
                        />
                    ))
                )}
            </Gallery>
        </Container>
    );
};

export default Developers;
