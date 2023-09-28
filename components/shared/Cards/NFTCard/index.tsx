//required
import Image from "next/image";
import styled from "styled-components";
//essential
import { space } from "@/app/layout";

const Container = styled.div``;

const ImageWrapper = styled.div`
    position: relative;
    overflow: hidden;
    height: 29.5rem;
    border-radius: 2rem 2rem 0 0;
`;

const TextWrapper = styled.div`
    background-color: ${(props) => props.theme.colors.secondaryBg};
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    padding: 2rem;
    border-radius: 0 0 2rem 2rem;
`;

const Artist = styled.div`
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
    gap: 1rem;
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

const AdditionalInfo = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Price = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-right: 2rem;
`;

const Bid = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const Text = styled.p`
    font-size: ${(props) => props.theme.fontSizes.caption};
    color: ${(props) => props.theme.colors.grey};
    font-weight: 400;
    line-height: 110%;
`;

const Number = styled.p`
    font-size: ${(props) => props.theme.fontSizes.base};
    font-weight: 400;
    line-height: 140%;
`;

const NFTCard = ({
    key,
    name,
    domain,
    games_count,
    image_background,
}: {
    key: number;
    name: string;
    domain: string;
    games_count: number;
    image_background: string;
}) => {
    return (
        <Container>
            <ImageWrapper>
                <Image
                    src={image_background}
                    alt={name}
                    fill
                />
            </ImageWrapper>

            <TextWrapper>
                <Artist>
                    <Title>{name}</Title>
                    <Info>
                        <Avatar>
                            <Image
                                src={"/icons/Eye.svg"}
                                alt={name}
                                fill
                            />
                        </Avatar>
                        <Name className={space.className}>No. of Games: {games_count}</Name>
                    </Info>
                </Artist>

                <AdditionalInfo>
                    <Price>
                        <Text className={space.className}>Official Website:</Text>
                        <Number className={space.className}>{domain}</Number>
                    </Price>
                </AdditionalInfo>
            </TextWrapper>
        </Container>
    );
};

export default NFTCard;
