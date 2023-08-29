import styled from "styled-components";
import Heading from "../../Heading";
import Image from "next/image";

const Container = styled.div`
    background-color: ${(props) => props.theme.colors.secondaryBg};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    border-radius: 2rem;
    padding: 1rem 3rem 3rem;
`;

const ImageWrapper = styled.div`
    position: relative;
    width: 25rem;
    height: 25rem;
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1rem;
`;

const Text = styled.p`
    font-size: ${(props) => props.theme.fontSizes.base};
    font-weight: 400;
    line-height: 140%;
`;

const AboutCard = () => {
    return (
        <Container>
            <ImageWrapper>
                <Image
                    src={"/images/1.png"}
                    alt="image"
                    fill
                />
            </ImageWrapper>
            <TextWrapper>
                <Heading sub="Setup Your Wallet" />
                <Text>
                    Set up your wallet of choice. Connect it to the NFT market by clicking the
                    wallet icon in the top right corner.
                </Text>
            </TextWrapper>
        </Container>
    );
};

export default AboutCard;
