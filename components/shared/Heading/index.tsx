import React from "react";
import styled from "styled-components";

interface HeadingProps {
    main?: string;
    sub?: string;
    large?: boolean;
}

const Container = styled.div<{ large?: boolean }>`
    display: flex;
    flex-direction: column;
    gap: ${(props) => (props.large ? "2rem" : "1rem")};
`;

const MainHeading = styled.h3<{ large?: boolean }>`
    font-size: ${(props) => (props.large ? props.theme.fontSizes.h1 : props.theme.fontSizes.h3)};
    line-height: ${(props) => (props.large ? "110%" : "120%")};
    font-weight: 600;
`;

const SubHeading = styled.h5`
    font-size: ${(props) => props.theme.fontSizes.h5};
    font-weight: 400;
    line-height: 160%;
`;

const Heading: React.FC<HeadingProps> = ({ main, sub, large }) => {
    return (
        <Container large={large}>
            <MainHeading large={large}>{main}</MainHeading>
            {sub && <SubHeading>{sub}</SubHeading>}
        </Container>
    );
};

export default Heading;