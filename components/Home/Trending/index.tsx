//required
import styled from "styled-components";
import Image from "next/image";
//essential
import { trending } from "@/constants";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6rem;
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const Title = styled.h3`
    font-size: ${(props) => props.theme.fontSizes.h3};
    font-weight: 600;
`;

const SubTitle = styled.p`
    font-size: ${(props) => props.theme.fontSizes.h5};
    font-weight: 400;
`;

const Gallery = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
`;

const Card = styled.div`
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

const SubImageWrapper = styled.div`
    position: relative;
    width: 10rem;
    height: 10rem;
    border-radius: 2rem;
    overflow: hidden;
`;

const MiniCards = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Text = styled.h5`
    font-size: ${(props) => props.theme.fontSizes.h5};
    font-weight: 600;
`;

const SubText = styled.div`
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
`;

const Trending = () => {
    return (
        <Container>
            <TextWrapper>
                <Title>Trending Games</Title>
                <SubTitle>Checkout Our Weekly Updated Trending Collection.</SubTitle>
            </TextWrapper>

            <Gallery>
                {trending.map((item) => (
                    <Card key={item.id}>
                        <MainImageWrapper>
                            <Image
                                src={item.url}
                                alt={item.title}
                                fill
                            />
                        </MainImageWrapper>

                        <MiniCards>
                            {trending.map((item) => (
                                <SubImageWrapper key={item.id}>
                                    <Image
                                        src={item.url}
                                        alt={item.title}
                                        fill
                                    />
                                </SubImageWrapper>
                            ))}
                        </MiniCards>

                        <Text>Space Walking</Text>
                        <SubText>
                            <Avatar>
                                <Image
                                    src={"/avatars/Avatar14.png"}
                                    alt="avatar"
                                    fill
                                />
                            </Avatar>
                            <Name>Animakid</Name>
                        </SubText>
                    </Card>
                ))}
            </Gallery>
        </Container>
    );
};

export default Trending;
