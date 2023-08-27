//required
import Image from "next/image";
import styled from "styled-components";
//essential
import { space } from "@/app/layout";
//components
import Button from "@/components/shared/Button";

const Container = styled.div`
    color: ${(props) => props.theme.colors.white};
    display: flex;
    gap: 3rem;
    padding: 8rem 19.5rem;
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
    width: 22.4rem;
`;

const Figures = styled.div`
    display: flex;
    gap: 3rem;
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

const ImageSection = styled.div`
    flex: 0.5;
    display: flex;
    flex-direction: column;
    align-items: end;
    width: 51rem;
    height: 51rem;
`;

const ImageWrapper = styled.div`
    position: relative;
    width: 51rem;
    height: 40rem;
    border-radius: 2rem 2rem 0 0;
    overflow: hidden;
`;

const BottomCard = styled.div`
    background-color: ${(props) => props.theme.colors.secondaryBg};
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 51rem;
    padding: 2rem;
    border-radius: 0 0 2rem 2rem;
`;

const Text = styled.h5`
    font-size: ${(props) => props.theme.fontSizes.h5};
    font-weight: 600;
`;

const SubText = styled.div`
    display: flex;
    align-items: center;
    gap: 1.2rem;
`;

const Avatar = styled.div`
    position: relative;
    width: 2.5rem;
    height: 2.5rem;
`;

const Name = styled.p`
    font-size: ${(props) => props.theme.fontSizes.base};
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
                    <Title>
                        DISCOVER
                        <br /> DIGITAL ART & <br />
                        COLLECT NFTs
                    </Title>
                    <SubTitle>
                        NFT MARKETPLACE UI CREATD WITH ANIMA FOR FIGMA. <br /> COLLECT, BUY AND SELL
                        ART FROM MORE <br /> THAN 20K NFT ARTISTS.
                    </SubTitle>
                </TitleWrapper>
                <ButtonWrapper>
                    <Button
                        fullWidth
                        variant="primary"
                        height="secondary"
                        padding="primary"
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

            <ImageSection>
                <ImageWrapper>
                    <Image
                        src={"/images/placeholder.png"}
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
                                fill
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
