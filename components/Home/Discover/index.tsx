//required
import Image from "next/image";
import styled from "styled-components";
//essential
import { trending } from "@/constants";
//components
import Button from "@/components/shared/Button";
import NFTCard from "@/components/shared/Cards/NFTCard";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6rem;
`;

const HeadingContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const HeadingWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const Heading = styled.h3`
    font-size: ${(props) => props.theme.fontSizes.h3};
    font-weight: 600;
`;

const SubHeading = styled.p`
    font-size: ${(props) => props.theme.fontSizes.h5};
    font-weight: 400;
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
                <HeadingWrapper>
                    <Heading>Discover More NFTs</Heading>
                    <SubHeading>Explore New Trending NFTs</SubHeading>
                </HeadingWrapper>
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
                {trending.map((card) => (
                    <NFTCard
                        key={card.id}
                        id={card.id}
                        title={card.title}
                        name={card.name}
                        imgUrl={card.imgUrl}
                        avatarUrl={card.avatarUrl}
                    />
                ))}
            </Cards>
        </Container>
    );
};

export default Discover;
