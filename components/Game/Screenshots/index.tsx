import Image from "next/image";
import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const Card = styled.div`
    position: relative;
    overflow: hidden;
    width: 33rem;
    height: 33rem;
    border-radius: 2rem;
`;

const Screenshots = ({ imageUrl }: any) => {
    return (
        <Container>
            <Card>
                <Image
                    src={imageUrl}
                    alt="image"
                    fill
                />
            </Card>
        </Container>
    );
};

export default Screenshots;
