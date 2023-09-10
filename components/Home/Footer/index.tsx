//required
import Image from "next/image";
import styled from "styled-components";
//essential
import { space } from "@/app/layout";
//components
import Button from "@/components/shared/Button";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5rem;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Info = styled.div`
    width: 32.7rem;
    display: flex;
    flex-direction: column;
    gap: 3rem;
`;

const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 1.2rem;
`;

const Logo = styled.div`
    position: relative;
    width: 3.2rem;
    height: 3.2rem;
`;

const Title = styled.h4`
    font-size: ${(props) => props.theme.fontSizes.h5};
    font-weight: 600;
`;

const Text = styled.p`
    font-size: ${(props) => props.theme.fontSizes.base};
    font-weight: 400;
    color: ${(props) => props.theme.colors.grey};
`;

const AdditionalInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

const Community = styled.div`
    display: flex;
    gap: 1rem;
    opacity: 0.3;
`;

const Explore = styled.div`
    width: 24rem;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
`;

const Subscribe = styled.div`
    width: 42rem;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
`;

const Form = styled.form`
    position: relative;
    display: flex;
    height: 6rem;
    border-radius: 2rem;
`;

const InputWrapper = styled.div`
    background-color: ${(props) => props.theme.colors.white};
    display: flex;
    align-items: center;
    width: 100%;
    padding: 1.6rem 0 1.6rem 2rem;
    border-radius: 2rem;
    z-index: 1;
`;

const Input = styled.input`
    border: none;
    outline: none;
`;

const ButtonWrapper = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 17.9rem;
    z-index: 99;
`;

const Copy = styled.div`
    padding-top: 2rem;
    border-top: 1px solid #858584;
`;

const SubscribeIcon = () => (
    <Image
        src={"/icons/EnvelopeSimple.svg"}
        alt="subscribe"
        width={25}
        height={25}
    />
);

const Footer = () => {
    return (
        <Container>
            <Wrapper>
                <Info>
                    <LogoWrapper>
                        <Logo>
                            <Image
                                src={"/icons/Storefront.svg"}
                                alt="logo"
                                fill
                            />
                        </Logo>
                        <Title className={space.className}>GAME-SCOPE</Title>
                    </LogoWrapper>
                    <AdditionalInfo>
                        <Text>
                            NFT marketplace UI created
                            <br /> with Anima for Figma.
                        </Text>
                        <Text>Join Our Community.</Text>
                        <Community>
                            <LogoWrapper>
                                <Logo>
                                    <Image
                                        src={"/icons/DiscordLogo.svg"}
                                        alt="logo"
                                        fill
                                    />
                                </Logo>
                                <Logo>
                                    <Image
                                        src={"/icons/YoutubeLogo.svg"}
                                        alt="logo"
                                        fill
                                    />
                                </Logo>
                                <Logo>
                                    <Image
                                        src={"/icons/TwitterLogo.svg"}
                                        alt="logo"
                                        fill
                                    />
                                </Logo>
                                <Logo>
                                    <Image
                                        src={"/icons/InstagramLogo.svg"}
                                        alt="logo"
                                        fill
                                    />
                                </Logo>
                            </LogoWrapper>
                        </Community>
                    </AdditionalInfo>
                </Info>
                <Explore>
                    <Title className={space.className}>Explore</Title>
                    <AdditionalInfo>
                        <Text>Marketplace</Text>
                        <Text>Rankings</Text>
                        <Text>Connect a Wallet</Text>
                    </AdditionalInfo>
                </Explore>
                <Subscribe>
                    <Title className={space.className}>Join Our Weekly Digest</Title>
                    <Text>
                        Get Exclusive Promotions & Updates
                        <br /> Straight To Your Inbox.
                    </Text>
                    <Form>
                        <InputWrapper>
                            <Input placeholder="Enter Your E-mail Here" />
                        </InputWrapper>

                        <ButtonWrapper>
                            <Button
                                fullwidth
                                variant="primary"
                                height="secondary"
                                padding="primary"
                                preIcon={SubscribeIcon}
                            >
                                Subscribe
                            </Button>
                        </ButtonWrapper>
                    </Form>
                </Subscribe>
            </Wrapper>
            <Copy>
                <Text>Ⓒ NFT Market. Use this template freely.</Text>
            </Copy>
        </Container>
    );
};

export default Footer;
