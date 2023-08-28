//required
import styled from "styled-components";
//essential
import { categories } from "@/constants";
//components
import CategoryCard from "@/components/shared/Cards/CategoryCard";
import Heading from "@/components/shared/Heading";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6rem;
`;

const Cards = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
`;

const Category = () => {
    return (
        <Container>
            <Heading main="Browse Category" />

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
