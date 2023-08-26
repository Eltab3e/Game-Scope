"use client";
//required
import styled from "styled-components";
//components
import Hero from "@/components/Home/Hero";
import Trending from "@/components/Home/Trending";

const Container = styled.div`
    background-color: ${(props) => props.theme.colors.primaryBg};
    display: flex;
    flex-direction: column;
`;

export default function Home() {
    return (
        <Container>
            <Hero />
            <Trending />
        </Container>
    );
}
