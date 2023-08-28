//required
import styled from "styled-components";
//essential
import { categories } from "@/constants";
//components
import CategoryCard from "@/components/shared/Cards/CategoryCard";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6rem;
`;

const Heading = styled.h3`
    font-size: ${(props) => props.theme.fontSizes.h3};
    font-weight: 600;
`;

const Cards = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
`;

const Category = () => {
    return (
        <Container>
            <Heading>Browse Categories</Heading>

            <Cards>
                {categories.slice(0, 8).map((category) => (
                    <CategoryCard
                        key={category.id}
                        id={category.id}
                        title={category.title}
                        imgUrl={category.imgUrl}
                        iconUrl={category.iconUrl}
                    />
                ))}
            </Cards>
        </Container>
    );
};

export default Category;
