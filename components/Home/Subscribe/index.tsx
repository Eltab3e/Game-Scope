//required
import Image from "next/image";
import styled from "styled-components";
//components
import Button from "@/components/shared/Button";
import Heading from "@/components/shared/Heading";

const Container = styled.div``;

const Wrapper = styled.div`
    background-color: ${(props) => props.theme.colors.secondaryBg};
    display: flex;
    gap: 8rem;
    padding: 6rem;
    border-radius: 2rem;
`;

const ImageSection = styled.div`
    width: 42.5rem;
    position: relative;
    overflow: hidden;
    height: 31rem;
    border-radius: 2rem;
`;

const TextSection = styled.div`
    width: 42.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4rem;
`;

const Form = styled.form`
    position: relative;
    display: flex;
    height: 6rem;
    border-radius: 2rem;
`;

const InputWrapper = styled.div`
    background-color: ${(props) => props.theme.colors.white};
    display: flex;
    align-items: center;
    width: 100%;
    padding: 1.6rem 0 1.6rem 2rem;
    border-radius: 2rem;
    z-index: 1;
`;

const Input = styled.input`
    border: none;
    outline: none;
`;

const ButtonWrapper = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 21.1rem;
    z-index: 99;
`;

const SubscribeIcon = () => (
    <Image
        src={"/icons/EnvelopeSimple.svg"}
        alt="subscribe"
        width={25}
        height={25}
    />
);

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
                    <Form>
                        <InputWrapper>
                            <Input placeholder="Enter Your E-mail Here" />
                        </InputWrapper>

                        <ButtonWrapper>
                            <Button
                                fullwidth
                                variant="primary"
                                height="secondary"
                                padding="primary"
                                preIcon={SubscribeIcon}
                            >
                                Subscribe
                            </Button>
                        </ButtonWrapper>
                    </Form>
                </TextSection>
            </Wrapper>
        </Container>
    );
};

export default Subscribe;
