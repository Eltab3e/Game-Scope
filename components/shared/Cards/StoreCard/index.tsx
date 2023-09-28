//required
import Image from "next/image";
import styled from "styled-components";
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

const Store = styled.div`
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

const Website = styled.div`
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

const Link = styled.p`
    font-size: ${(props) => props.theme.fontSizes.base};
    font-weight: 400;
    line-height: 140%;
`;

const StoreCard = ({
    key,
    name,
    domain,
    count,
    image,
}: {
    key: number;
    name: string;
    domain: string;
    count: number;
    image: string;
}) => {
    return (
        <Container>
            <ImageWrapper>
                <Image
                    src={image}
                    alt={name}
                    fill
                />
            </ImageWrapper>

            <TextWrapper>
                <Store>
                    <Title>{name}</Title>
                    <Info>
                        <Avatar>
                            <Image
                                src={"/icons/List.svg"}
                                alt={name}
                                fill
                            />
                        </Avatar>
                        <Name className={space.className}>No. of Games: {count}</Name>
                    </Info>
                </Store>

                <AdditionalInfo>
                    <Website>
                        <Text className={space.className}>Official Website:</Text>
                        <Link className={space.className}>{domain}</Link>
                    </Website>
                </AdditionalInfo>
            </TextWrapper>
        </Container>
    );
};

export default StoreCard;
