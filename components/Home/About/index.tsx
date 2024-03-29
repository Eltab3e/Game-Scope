//required
import styled from "styled-components";
import { about } from "@/constants";
//components
import Heading from "@/components/shared/Heading";
import AboutCard from "@/components/shared/Cards/AboutCard";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6rem;
`;

const Cards = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
`;

const About = () => {
    return (
        <Container id="about">
            <Heading
                main="About Us"
                sub="Discover The Gaming Universe With Us."
            />

            <Cards>
                {about.map((card) => (
                    <AboutCard
                        key={card.id}
                        imgUrl={card.imgUrl}
                        title={card.title}
                        text={card.text}
                    />
                ))}
            </Cards>
        </Container>
    );
};

export default About;
