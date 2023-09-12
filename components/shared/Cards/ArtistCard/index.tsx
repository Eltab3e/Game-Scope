//required
import Image from "next/image";
import styled from "styled-components";
//essential
import { space } from "@/app/layout";

const Container = styled.div`
    background-color: ${(props) => props.theme.colors.secondaryBg};
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding: 2rem;
    border-radius: 2rem;
`;

const Avatar = styled.div`
    position: relative;
    width: 12rem;
    height: 12rem;
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1rem;
`;

const Title = styled.h5`
    font-size: ${(props) => props.theme.fontSizes.h5};
    font-weight: 600;
    line-height: 140%;
`;

const Info = styled.div`
    display: flex;
    gap: 1rem;
`;

const Text = styled.p`
    font-size: ${(props) => props.theme.fontSizes.base};
    font-weight: 400;
    line-height: 140%;
`;

const LightText = styled.p`
    font-size: ${(props) => props.theme.fontSizes.base};
    color: ${(props) => props.theme.colors.grey};
    font-weight: 400;
    line-height: 140%;
`;

const Ranking = styled.div`
    background-color: ${(props) => props.theme.colors.primaryBg};
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: flex-start;
    position: absolute;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
`;

const ArtistCard = ({
    key,
    name,
    image,
    count,
}: {
    key: number;
    name: string;
    image: string;
    count: string;
}) => {
    return (
        <Container>
            <Ranking>
                <LightText className={space.className}>{key}</LightText>
            </Ranking>
            <Avatar>
                <Image
                    src={image}
                    alt={name}
                    fill
                    style={{ borderRadius: "50%" }}
                />
            </Avatar>
            <TextWrapper>
                <Title>{name}</Title>
                <Info>
                    <LightText>No. of Games:</LightText>
                    <Text className={space.className}>{count}</Text>
                </Info>
            </TextWrapper>
        </Container>
    );
};

export default ArtistCard;
