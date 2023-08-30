//required
import styled from "styled-components";
//essential
import { trending } from "@/constants";
//components
import Heading from "@/components/shared/Heading";
import CollectionCard from "@/components/shared/Cards/CollectionCard";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6rem;
`;

const Gallery = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
`;

const Trending = () => {
    return (
        <Container>
            <Heading
                main="Trending Games"
                sub="Checkout Our Weekly Updated Trending Collection."
            />

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
