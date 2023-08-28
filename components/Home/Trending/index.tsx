//required
import styled from "styled-components";
//essential
import { trending } from "@/constants";
//components
import CollectionCard from "@/components/shared/Cards/CollectionCard";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6rem;
`;

const TextWrapper = styled.div`
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

const Gallery = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
`;

const Trending = () => {
    return (
        <Container>
            <TextWrapper>
                <Title>Trending Games</Title>
                <SubTitle>Checkout Our Weekly Updated Trending Collection.</SubTitle>
            </TextWrapper>

            <Gallery>
                {trending.map((item) => (
                    <CollectionCard
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        name={item.name}
                        imgUrl={item.imgUrl}
                    />
                ))}
            </Gallery>
        </Container>
    );
};

export default Trending;
