import styled from "styled-components";
import Button from "@/components/shared/Button";
import Image from "next/image";

const Container = styled.div`
    color: ${(props) => props.theme.colors.white};
    display: flex;
    flex-direction: column;
    gap: 6rem;
    padding: 8rem 19.5rem;
`;

const TextContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10rem;
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
    display: flex;
    align-items: flex-end;
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
                        variant="outline"
                        height="secondary"
                        padding="secondary"
                        preIcon={Icon}
                    >
                        View Rankings
                    </Button>
                </ButtonContainer>
            </TextContainer>
        </Container>
    );
};

export default Top;
