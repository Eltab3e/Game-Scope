//required
import Image from "next/image";
import styled from "styled-components";

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

const CollectionCard = ({
    key,
    name,
    background_image,
    screenshots,
}: {
    key: number;
    name: string;
    background_image: string;
    screenshots: any;
}) => {
    return (
        <Container>
            <ImagesWrapper>
                <MainImageWrapper>
                    <Image
                        src={background_image}
                        alt={name}
                        fill
                    />
                </MainImageWrapper>
                <SubImagesWrapper>
                    <SubImage>
                        <Image
                            src={background_image}
                            alt={name}
                            fill
                        />
                    </SubImage>
                    <SubImage>
                        <Image
                            src={background_image}
                            alt={name}
                            fill
                        />
                    </SubImage>
                    <SubImage>
                        <Image
                            src={background_image}
                            alt={name}
                            fill
                        />
                    </SubImage>
                </SubImagesWrapper>
            </ImagesWrapper>
            <TextWrapper>
                <Title>{name}</Title>
                <Info>
                    <Avatar>
                        <Image
                            src={background_image}
                            alt={name}
                            fill
                        />
                    </Avatar>
                    <Name>{name}</Name>
                </Info>
            </TextWrapper>
        </Container>
    );
};

export default CollectionCard;
