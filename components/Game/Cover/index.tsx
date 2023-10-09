//required
import Image from "next/image";
import styled from "styled-components";

const ImageWrapper = styled.div`
    position: relative;
    overflow: hidden;
    height: 56rem;
`;

const Cover = ({ imageUrl, alt }: any) => (
    <ImageWrapper>
        <Image
            src={imageUrl}
            alt={alt}
            fill
            priority
        />
    </ImageWrapper>
);

export default Cover;
