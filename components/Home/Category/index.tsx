//required
import Image from "next/image";
import styled from "styled-components";
//essential
import { categories } from "@/constants";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6rem;
`;

const TextWrapper = styled.div``;

const Title = styled.h3`
    font-size: ${(props) => props.theme.fontSizes.h3};
    font-weight: 600;
`;

const Gallery = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
`;

const Card = styled.div`
    display: flex;
    flex-direction: column;
`;

const ImageWrapper = styled.div`
    position: relative;
    height: 24rem;
    border-radius: 2rem 2rem 0 0;
    overflow: hidden;
`;

const BottomCard = styled.div`
    background-color: ${(props) => props.theme.colors.secondaryBg};
    border-radius: 0 0 2rem 2rem;
    padding: 2.5rem 3rem;
`;

const Text = styled.h5`
    font-size: ${(props) => props.theme.fontSizes.h5};
    font-weight: 600;
`;

const Category = () => {
    return (
        <Container>
            <TextWrapper>
                <Title>Browse Categories</Title>
            </TextWrapper>

            <Gallery>
                {categories.slice(0, 8).map((category) => (
                    <Card key={category.id}>
                        <ImageWrapper>
                            <Image
                                src={category.url}
                                alt={category.title}
                                fill
                            />
                        </ImageWrapper>
                        <BottomCard>
                            <Text>Art</Text>
                        </BottomCard>
                    </Card>
                ))}
            </Gallery>
        </Container>
    );
};

export default Category;
