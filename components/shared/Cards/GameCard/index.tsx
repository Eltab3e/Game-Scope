//required
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

interface GameCardProps {
    id: number;
    name: string;
    image: string;
    screenshots: string[];
    platforms: string[];
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;

const ImagesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;

const MainImageWrapper = styled.div`
    position: relative;
    height: 33rem;
    border-radius: 2rem;
    overflow: hidden;
`;

const SubImagesWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const SubImage = styled.div`
    position: relative;
    width: 10rem;
    height: 10rem;
    border-radius: 2rem;
    overflow: hidden;
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
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
    border-radius: 2rem;
    overflow: hidden;
`;

const Name = styled.p`
    font-size: ${(props) => props.theme.fontSizes.base};
    font-weight: 400;
    line-height: 140%;
`;

const GameCard = ({ id, name, image, screenshots, platforms }: GameCardProps) => {
    return (
        <Container>
            <ImagesWrapper>
                <Link
                    href={`/games/[id]`}
                    as={`/games/${id}`}
                >
                    <MainImageWrapper>
                        <Image
                            src={image}
                            alt={name}
                            fill
                        />
                    </MainImageWrapper>
                </Link>
                <SubImagesWrapper>
                    {screenshots.map((screenshot, index) => (
                        <Link
                            href={`/games/[id]`}
                            as={`/games/${id}`}
                            key={index}
                        >
                            <SubImage>
                                <Image
                                    src={screenshot}
                                    alt={`${name} Screenshot ${index}`}
                                    fill
                                />
                            </SubImage>
                        </Link>
                    ))}
                </SubImagesWrapper>
            </ImagesWrapper>

            <TextWrapper>
                <Title>{name}</Title>
                <Info>
                    <Avatar>
                        <Image
                            src={"/icons/List.svg"}
                            alt={name}
                            fill
                        />
                    </Avatar>
                    <Name>{platforms}</Name>
                </Info>
            </TextWrapper>
        </Container>
    );
};

export default GameCard;
