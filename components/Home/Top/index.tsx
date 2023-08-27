//required
import styled from "styled-components";
import Image from "next/image";
//essential
import { top } from "@/constants";
//components
import Button from "@/components/shared/Button";

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

const HeadingWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const Title = styled.h3`
    font-size: ${(props) => props.theme.fontSizes.h3};
    font-weight: 600;
`;

const SubTitle = styled.p`
    font-size: ${(props) => props.theme.fontSizes.h5};
    font-weight: 400;
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

const Card = styled.div`
    background-color: ${(props) => props.theme.colors.secondaryBg};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding: 2rem;
    border-radius: 2rem;
`;

const ImageWrapper = styled.div`
    position: relative;
    width: 12rem;
    height: 12rem;
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
`;

const Name = styled.h5`
    font-size: ${(props) => props.theme.fontSizes.h5};
    font-weight: 600;
`;

const SubName = styled.p`
    font-size: ${(props) => props.theme.fontSizes.base};
    font-weight: 400;
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
    return (
        <Container>
            <TextContainer>
                <HeadingWrapper>
                    <Title>Top Creators</Title>
                    <SubTitle>Checkout Top Rated Creators On NFT Marketplace.</SubTitle>
                </HeadingWrapper>
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
                {top.map((card) => (
                    <Card key={card.id}>
                        <ImageWrapper>
                            <Image
                                src={card.url}
                                alt={card.title}
                                fill
                            />
                        </ImageWrapper>
                        <TextWrapper>
                            <Name>Ahmed</Name>
                            <SubName>Eltabie</SubName>
                        </TextWrapper>
                    </Card>
                ))}
            </Gallery>
        </Container>
    );
};

export default Top;
