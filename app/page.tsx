"use client";

import styled from "styled-components";

import Hero from "@/components/Home/Hero";
import Trending from "@/components/Home/Trending";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 120px;
    padding: 75px 250px;
    background-color: ${(props) => props.theme.colors.backgroundPrimary};
`;

export default function Home() {
    return (
        <Container>
            <Hero />
            <Trending />
        </Container>
    );
}
