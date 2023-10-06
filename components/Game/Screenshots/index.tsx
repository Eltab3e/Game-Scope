import Image from "next/image";
import React from "react";
import styled from "styled-components";

const Card = styled.div`
    position: relative;
    overflow: hidden;
    width: 35rem;
    height: 33rem;
`;

const Screenshots = ({ imageUrl }: any) => {
    return (
        <Card>
            <Image
                src={imageUrl}
                alt="image"
                fill
            />
        </Card>
    );
};

export default Screenshots;
