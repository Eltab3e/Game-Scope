//required
import Image from "next/image";
import styled from "styled-components";

interface GenreCardProps {
    name: string;
    image: string;
    iconUrl: string | null;
}

const Container = styled.div``;

const ImageWrapper = styled.div`
    position: relative;
    height: 24rem;
    border-radius: 2rem 2rem 0 0;
    overflow: hidden;
`;

const IconWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10rem;
    height: 10rem;
`;

const TextWrapper = styled.div`
    background-color: ${(props) => props.theme.colors.secondaryBg};
    padding: 3rem;
    border-radius: 0 0 2rem 2rem;
`;

const Title = styled.h5`
    font-size: ${(props) => props.theme.fontSizes.h5};
    font-weight: 600;
    line-height: 140%;
`;

const GenreCard = ({ name, image, iconUrl }: GenreCardProps) => {
    return (
        <Container>
            <ImageWrapper>
                <Image
                    src={image}
                    alt={name}
                    fill
                    style={{ filter: "blur(10px)" }}
                />
                <IconWrapper>
                    {iconUrl && (
                        <Image
                            src={iconUrl}
                            alt={name}
                            fill
                        />
                    )}
                </IconWrapper>
            </ImageWrapper>

            <TextWrapper>
                <Title>{name}</Title>
            </TextWrapper>
        </Container>
    );
};

export default GenreCard;
