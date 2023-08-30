//required
import styled from "styled-components";
import Image from "next/image";
//components
import Heading from "../../Heading";

const Container = styled.div`
    background-color: ${(props) => props.theme.colors.secondaryBg};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    border-radius: 2rem;
    padding: 1rem 3rem 3rem;
`;

const ImageWrapper = styled.div`
    position: relative;
    width: 25rem;
    height: 25rem;
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1rem;
`;

const Text = styled.p`
    font-size: ${(props) => props.theme.fontSizes.base};
    font-weight: 400;
    line-height: 140%;
`;

const AboutCard = ({
    key,
    imgUrl,
    title,
    text,
}: {
    key: number;
    imgUrl: string;
    title: string;
    text: string;
}) => {
    return (
        <Container>
            <ImageWrapper>
                <Image
                    src={imgUrl}
                    alt={title}
                    fill
                />
            </ImageWrapper>
            <TextWrapper>
                <Heading
                    sub={title}
                    bold
                />
                <Text>{text}</Text>
            </TextWrapper>
        </Container>
    );
};

export default AboutCard;
