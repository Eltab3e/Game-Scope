//required
import Image from "next/image";
import styled from "styled-components";
//essential
import { useFetchStores } from "@/shared/hooks/stores/useFetchStores";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
//components
import Button from "@/components/shared/Button";
import NFTCard from "@/components/shared/Cards/NFTCard";
import Heading from "@/components/shared/Heading";
import Error from "@/components/shared/Error";

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
    width: 24.7rem;
`;

const Cards = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
`;

const EyeIcon = () => (
    <Image
        src="/icons/Eye.svg"
        alt="icon"
        width={20}
        height={20}
    />
);

const Discover = () => {
    const { data, isLoading, error, isError } = useFetchStores();

    const stores = data?.results;
    console.log("stores", stores);

    return (
        <Container>
            <HeadingContainer>
                <Heading
                    main="Discover More NFTs"
                    sub="Explore New Trending NFTs."
                ></Heading>

                <ButtonWrapper>
                    <Button
                        fullwidth
                        variant="outline"
                        height="secondary"
                        preIcon={EyeIcon}
                    >
                        Get Started
                    </Button>
                </ButtonWrapper>
            </HeadingContainer>

            <Cards>
                {isLoading || !stores ? (
                    Array.from({ length: 3 }).map((_, index) => (
                        <Skeleton
                            key={index}
                            count={1}
                            height={400}
                        />
                    ))
                ) : isError ? (
                    <Error>{(error as Error).message}</Error>
                ) : (
                    stores.map((store: any) => (
                        <NFTCard
                            key={store.id}
                            name={store.name}
                            domain={store.domain}
                            games_count={store.games_count}
                            image_background={store.image_background}
                        />
                    ))
                )}
            </Cards>
        </Container>
    );
};

export default Discover;
