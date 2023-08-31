import Button from "@/components/shared/Button";
import Heading from "@/components/shared/Heading";
import Image from "next/image";
import styled from "styled-components";

const Container = styled.div``;

const Wrapper = styled.div`
    background-color: ${(props) => props.theme.colors.secondaryBg};
    display: flex;
    gap: 8rem;
    padding: 6rem;
    border-radius: 2rem;
`;

const ImageSection = styled.div`
    position: relative;
    overflow: hidden;
    width: 42.5rem;
    height: 31rem;
    border-radius: 2rem;
`;

const TextSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4rem;
`;

const Subscribe = () => {
    return (
        <Container>
            <Wrapper>
                <ImageSection>
                    <Image
                        src={"/images/photo.png"}
                        alt="photo"
                        fill
                    />
                </ImageSection>

                <TextSection>
                    <Heading
                        main="Join Our Weekly Digest"
                        sub="Get exclusive promotions & updates straight to your inbox."
                    />
                </TextSection>
            </Wrapper>
        </Container>
    );
};

export default Subscribe;
