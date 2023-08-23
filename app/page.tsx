"use client";
import { styled } from "styled-components";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

const Title = styled.h1`
    font-size: ${(props) => props.theme.fontSizes.extra};
`;

export default function Home() {
    return (
        <Container>
            <Title>Hello, World!</Title>
        </Container>
    );
}
