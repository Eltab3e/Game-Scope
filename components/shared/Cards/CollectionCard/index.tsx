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
    id,
    title,
    name,
    imgUrl,
}: {
    id: number;
    title: string;
    name: string;
    imgUrl: string;
}) => {
    return (
        <Container>
            <ImagesWrapper>
                <MainImageWrapper>
                    <Image
                        src={imgUrl}
                        alt={title}
                        fill
                    />
                </MainImageWrapper>
                <SubImagesWrapper>
                    <SubImage>
                        <Image
                            src={imgUrl}
                            alt={title}
                            fill
                        />
                    </SubImage>
                    <SubImage>
                        <Image
                            src={imgUrl}
                            alt={title}
                            fill
                        />
                    </SubImage>
                    <SubImage>
                        <Image
                            src={imgUrl}
                            alt={title}
                            fill
                        />
                    </SubImage>
                </SubImagesWrapper>
            </ImagesWrapper>
            <TextWrapper>
                <Title>{title}</Title>
                <Info>
                    <Avatar>
                        <Image
                            src={imgUrl}
                            alt={title}
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
