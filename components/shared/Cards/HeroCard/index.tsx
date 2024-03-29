//required
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

interface HeroCardProps {
    id: number;
    name: string;
    image: string;
    platforms: string;
    released: string;
}

const Container = styled.div`
    flex: 0.5;
    display: flex;
    flex-direction: column;
`;

const ImageWrapper = styled.div`
    position: relative;
    overflow: hidden;
    height: 41rem;
    border-radius: 2rem 2rem 0 0;
`;

const TextWrapper = styled.div`
    background-color: ${(props) => props.theme.colors.secondaryBg};
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
    border-radius: 0 0 2rem 2rem;
`;

const Title = styled.h5`
    font-size: ${(props) => props.theme.fontSizes.h5};
    font-weight: 600;
    line-height: 140%;
`;

const Info = styled.div`
    display: flex;
    align-items: center;
    gap: 1.2rem;
`;

const Avatar = styled.div`
    position: relative;
    width: 2.5rem;
    height: 2.5rem;
`;

const Name = styled.p`
    font-size: ${(props) => props.theme.fontSizes.base};
    font-weight: 400;
    line-height: 140%;
`;

const Released = styled.p`
    margin-left: auto;
    font-size: ${(props) => props.theme.fontSizes.base};
    font-weight: 400;
    line-height: 140%;
`;

const HeroCard = ({ id, name, image, platforms, released }: HeroCardProps) => {
    return (
        <Container>
            <Link
                href={`/games/[id]`}
                as={`/games/${id}`}
            >
                <ImageWrapper>
                    <Image
                        src={image}
                        alt={name}
                        width={600}
                        height={410}
                        priority
                    />
                </ImageWrapper>
            </Link>

            <TextWrapper>
                <Title>{name}</Title>
                <Info>
                    <Avatar>
                        <Image
                            src={"/icons/List.svg"}
                            alt="icon"
                            fill
                        />
                    </Avatar>
                    <Name>Platforms: {platforms}</Name>
                    <Released>Release Date: {released}</Released>
                </Info>
            </TextWrapper>
        </Container>
    );
};

export default HeroCard;
