import Image from "next/image";
import styled from "styled-components";

import { space } from "@/app/layout";
import Button from "@/components/shared/Button";

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    color: ${(props) => props.theme.colors.text};
`;

const TextSection = styled.div`
    grid-column: 1 / 2;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 50px;
    padding: 25px;
`;

const Title = styled.h1`
    font-size: ${(props) => props.theme.fontSizes.h1};
    font-weight: 600;
`;

const SubTitle = styled.h3`
    font-size: ${(props) => props.theme.fontSizes.h5};
    font-weight: 400;
    margin-right: 130px;
`;

const ButtonWrapper = styled.div`
    width: 200px;
`;

const Figures = styled.div`
    display: flex;
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
    grid-column: 2 / 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 45px;
`;

const ImageWrapper = styled.div`
    position: relative;
    width: 75%;
    height: 75%;
`;

const BottomCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    background-color: ${(props) => props.theme.colors.backgroundSecondary};
    border-radius: 0 0 16px 16px;
    width: 75%;
`;

const Text = styled.h1`
    font-size: ${(props) => props.theme.fontSizes.base};
    font-weight: 500;
`;

const SubText = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`;

const Avatar = styled.div``;

const Name = styled.h1`
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
                <ButtonWrapper>
                    <Button
                        variant="primary"
                        preIcon={RocketIcon}
                        fullwidth
                    >
                        Get Started
                    </Button>
                </ButtonWrapper>
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
                    />
                </ImageWrapper>
                <BottomCard>
                    <Text>Space Walking</Text>
                    <SubText>
                        <Avatar>
                            <Image
                                src={"/avatars/Avatar14.png"}
                                alt="avatar"
                                width={25}
                                height={25}
                            />
                        </Avatar>
                        <Name>Animakid</Name>
                    </SubText>
                </BottomCard>
            </ImageSection>
        </Container>
    );
};

export default Hero;
