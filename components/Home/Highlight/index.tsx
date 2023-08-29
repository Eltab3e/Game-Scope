//required
import styled from "styled-components";
import Image from "next/image";
//essential
import { generateOneColorGradient } from "@/utils";
//components
import Button from "@/components/shared/Button";
import Heading from "@/components/shared/Heading";

const Container = styled.div`
    width: 99.2vw;
    height: 64rem;
`;

const Background = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    padding: 36rem 39rem 8rem;
    background-image: url("/images/placeholder9.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    z-index: -99;
`;

const Overlay = styled.div<{ gradient: string }>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${(props) => props.gradient};
    opacity: 1;
    z-index: -99;
`;

const Info = styled.div`
    color: ${(props) => props.theme.colors.white};
    display: flex;
    justify-content: space-between;
    z-index: 99;
`;

const MainInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
`;

const ArtistCard = styled.div`
    background-color: ${(props) => props.theme.colors.primaryBg};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: 15.1rem;
    height: 4.4rem;
    border-radius: 2rem;
`;

const Avatar = styled.div`
    position: relative;
    width: 2.5rem;
    height: 2.5rem;
`;

const ButonWrapper = styled.div`
    width: 19.8rem;
    border-radius: 2rem;
`;

const SubInfo = styled.div`
    background-color: rgba(59, 59, 59, 0.5);
    display: flex;
    flex-direction: column;
    align-self: flex-end;
    gap: 1rem;
    padding: 3rem;
    border-radius: 2rem;
`;

const Text = styled.p`
    font-size: ${(props) => props.theme.fontSizes.base};
    font-weight: 400;
`;

const Timer = styled.div`
    display: flex;
    gap: 1rem;
`;

const Cell = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const gradient = generateOneColorGradient("162, 89, 255", 0, 1.0);

const EyeIcon = () => (
    <Image
        src="/icons/Eye.svg"
        alt="icon"
        width={20}
        height={20}
    />
);

const Highlight = () => {
    return (
        <Container>
            <Background>
                <Overlay gradient={gradient} />
                <Info>
                    <MainInfo>
                        <ArtistCard>
                            <Avatar>
                                <Image
                                    src={"/avatars/avatar2.png"}
                                    alt="avatar"
                                    fill
                                />
                            </Avatar>
                            <Text>Shroomie</Text>
                        </ArtistCard>
                        <Heading
                            main="Magic Mushrooms"
                            large
                        />
                        <ButonWrapper>
                            <Button
                                fullwidth
                                variant="outline"
                                height="secondary"
                                preIcon={EyeIcon}
                            >
                                See NFT
                            </Button>
                        </ButonWrapper>
                    </MainInfo>

                    <SubInfo>
                        <Text>Auction Starts In:</Text>
                        <Timer>
                            <Cell>
                                <Heading main="59 :" />
                                <Text>Hours</Text>
                            </Cell>
                            <Cell>
                                <Heading main="59 :" />
                                <Text>Minutes</Text>
                            </Cell>
                            <Cell>
                                <Heading main="59" />
                                <Text>Seconds</Text>
                            </Cell>
                        </Timer>
                    </SubInfo>
                </Info>
            </Background>
        </Container>
    );
};

export default Highlight;
