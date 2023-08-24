import styled from "styled-components";

const Container = styled.div`
    background-color: ${(props) => props.theme.colors.backgroundPrimary};
    color: ${(props) => props.theme.colors.text};
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 20px;
`;

const Title = styled.h1`
    font-size: ${(props) => props.theme.fontSizes.h3};
    font-weight: 600;
`;

const SubTitle = styled.h2`
    font-size: ${(props) => props.theme.fontSizes.base};
    font-weight: 500;
`;

const Gallery = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`;

const Trending = () => {
    return (
        <Container>
            <TextWrapper>
                <Title>Trending Games</Title>
                <SubTitle>Checkout Our Weekly Updated Trending Collection</SubTitle>
            </TextWrapper>

            <Gallery></Gallery>
        </Container>
    );
};

export default Trending;
