import Image from "next/image";
import styled from "styled-components";
import { space } from "@/app/layout";
import Button from "@/components/shared/Button";

const Container = styled.div`
    background-color: ${(props) => props.theme.colors.backgroundPrimary};
    color: ${(props) => props.theme.colors.text};
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    padding: 40px;
    gap: 40px;
`;

const TextSection = styled.div`
    grid-column: 2 / 5;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 25px;
`;

const Title = styled.h1`
    font-size: ${(props) => props.theme.fontSizes.h1};
    font-weight: 600;
`;

const SubTitle = styled.h3`
    font-size: ${(props) => props.theme.fontSizes.h5};
    font-weight: 400;
`;

const Figures = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
`;

const Items = styled.div`
    font-size: ${(props) => props.theme.fontSizes.h5};
    font-weight: 700;
`;

const Item = styled.div`
    font-weight: 400;
`;

const ImageSection = styled.div`
    grid-column: 5 / 8;
    display: flex;
    flex-direction: column;
`;

const ImageWrapper = styled.div`
    position: relative;
    width: 60%;
    height: 75%;
`;

const BottomCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding-top: 15px;
    background-color: ${(props) => props.theme.colors.backgroundSecondary};
`;

const Text = styled.h1`
    font-size: ${(props) => props.theme.fontSizes.base};
    font-weight: 500;
`;

const SubText = styled.h1`
    font-size: ${(props) => props.theme.fontSizes.base};
    font-weight: 500;
`;

const RocketIcon = () => (
    <Image
        src="/logos/RocketLaunch.svg"
        width={20}
        height={20}
        alt="user"
    />
);

const Hero = () => {
    return (
        <Container>
            <TextSection>
                <Title>
                    DISCOVER
                    <br /> DIGITAL ART & <br />
                    COLLECT NFTs
                </Title>
                <SubTitle>
                    NFT MARKETPLACE UI CREATD WITH ANIMA FOR FIGMA. COLLECT, BUY AND SELL ART FROM
                    MORE THAN 20K NFT ARTISTS.
                </SubTitle>
                <div>
                    <Button
                        variant="primary"
                        preIcon={RocketIcon}
                    >
                        Get Started
                    </Button>
                </div>
                <Figures>
                    <Items className={space.className}>
                        240K+ <Item>Sales</Item>
                    </Items>
                    <Items className={space.className}>
                        100K+ <Item>Auctions</Item>
                    </Items>
                    <Items className={space.className}>
                        210K+ <Item>Artists</Item>
                    </Items>
                </Figures>
            </TextSection>

            <ImageSection>
                <ImageWrapper>
                    <Image
                        src={"/images/ImagePlaceholder.png"}
                        alt="image"
                        fill
                        priority
                    />
                </ImageWrapper>
                <BottomCard>
                    <Text>Space Walking</Text>
                    <SubText>Animakid</SubText>
                </BottomCard>
            </ImageSection>
        </Container>
    );
};

export default Hero;
