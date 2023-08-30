//required
import Image from "next/image";
import styled from "styled-components";
//essential
import { discover } from "@/constants";
//components
import Button from "@/components/shared/Button";
import NFTCard from "@/components/shared/Cards/NFTCard";
import Heading from "@/components/shared/Heading";

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
                {discover.map((card) => (
                    <NFTCard
                        key={card.id}
                        id={card.id}
                        title={card.title}
                        name={card.name}
                        imgUrl={card.imgUrl}
                        avatarUrl={card.avatarUrl}
                        price={card.price}
                        bid={card.bid}
                    />
                ))}
            </Cards>
        </Container>
    );
};

export default Discover;
