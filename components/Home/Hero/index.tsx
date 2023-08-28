//required
import Image from "next/image";
import styled from "styled-components";
//essential
import { space } from "@/app/layout";
//components
import Button from "@/components/shared/Button";
import HightlightCard from "@/components/shared/Cards/HighlightCard";

const Container = styled.div`
    display: flex;
    gap: 3rem;
`;

const TextSection = styled.div`
    flex: 0.5;
    display: flex;
    flex-direction: column;
    gap: 4rem;
`;

const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

const Title = styled.h1`
    font-size: ${(props) => props.theme.fontSizes.h1};
    font-weight: 600;
`;

const SubTitle = styled.p`
    font-size: ${(props) => props.theme.fontSizes.h5};
    font-weight: 400;
`;

const ButtonWrapper = styled.div`
    width: 24.7rem;
`;

const Figures = styled.div`
    display: flex;
    gap: 6rem;
`;

const Items = styled.h4`
    font-size: ${(props) => props.theme.fontSizes.h4};
    font-weight: 700;
`;

const ItemWrapper = styled.div``;

const Item = styled.h5`
    font-size: ${(props) => props.theme.fontSizes.h5};
    font-weight: 400;
`;

const RocketIcon = () => (
    <Image
        src="/icons/RocketLaunch.svg"
        alt="user"
        width={20}
        height={20}
    />
);

const Hero = () => {
    return (
        <Container>
            <TextSection>
                <TitleWrapper>
                    <Title>DISCOVER DIGITAL ART & COLLECT NFTs</Title>
                    <SubTitle>
                        NFT MARKETPLACE UI CREATD WITH ANIMA FOR FIGMA. COLLECT, BUY AND SELL ART
                        FROM MORE THAN 20K NFT ARTISTS.
                    </SubTitle>
                </TitleWrapper>
                <ButtonWrapper>
                    <Button
                        fullwidth
                        variant="primary"
                        height="secondary"
                        preIcon={RocketIcon}
                    >
                        Get Started
                    </Button>
                </ButtonWrapper>
                <Figures>
                    <Items className={space.className}>
                        240K+
                        <ItemWrapper>
                            <Item>Sales</Item>
                        </ItemWrapper>
                    </Items>
                    <Items className={space.className}>
                        100K+
                        <ItemWrapper>
                            <Item>Auction</Item>
                        </ItemWrapper>
                    </Items>
                    <Items className={space.className}>
                        210K+
                        <ItemWrapper>
                            <Item>Artists</Item>
                        </ItemWrapper>
                    </Items>
                </Figures>
            </TextSection>

            <HightlightCard />
        </Container>
    );
};

export default Hero;
