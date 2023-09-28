//required
import Image from "next/image";
import styled from "styled-components";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { CountUp } from "use-count-up";
import { space } from "@/app/layout";
import { useFetchGameById } from "@/shared/hooks/games/useFetchGameById";
//components
import Heading from "@/components/shared/Heading";
import Button from "@/components/shared/Button";
import HeroCard from "@/components/shared/Cards/HeroCard";
import Error from "@/components/shared/Error";

const Container = styled.div`
    display: flex;
    gap: 3rem;
`;

const TextSection = styled.div`
    flex: 0.5;
    display: flex;
    flex-direction: column;
    gap: 4rem;
`;

const ButtonWrapper = styled.div`
    width: 24.7rem;
`;

const Figures = styled.div`
    display: flex;
    gap: 6rem;
`;

const Items = styled.h4`
    font-size: ${(props) => props.theme.fontSizes.h4};
    font-weight: 700;
`;

const ItemWrapper = styled.div``;

const Item = styled.h5`
    font-size: ${(props) => props.theme.fontSizes.h5};
    font-weight: 400;
`;

const RocketIcon = () => (
    <Image
        src="/icons/RocketLaunch.svg"
        alt="user"
        width={20}
        height={20}
    />
);

const Hero = () => {
    const { data, isLoading, error, isError } = useFetchGameById(58175);

    const { id, name, background_image, platforms } = data || {};

    return (
        <Container>
            <TextSection>
                <Heading
                    main="Game-Scope: Play Beyond Boundaries"
                    sub="Your one-stop destination for all things gaming! Immerse yourself in a world of endless excitement, explore games, discover studios, and seize exclusive giveaways."
                    large
                />

                <ButtonWrapper>
                    <Button
                        fullwidth
                        variant="primary"
                        height="secondary"
                        preIcon={RocketIcon}
                    >
                        Get Started
                    </Button>
                </ButtonWrapper>

                <Figures>
                    <Items className={space.className}>
                        <CountUp
                            isCounting
                            end={854227}
                            duration={5}
                        />
                        <ItemWrapper>
                            <Item>Game</Item>
                        </ItemWrapper>
                    </Items>

                    <Items className={space.className}>
                        <CountUp
                            isCounting
                            end={437602}
                            duration={4}
                        />
                        <ItemWrapper>
                            <Item>Developer</Item>
                        </ItemWrapper>
                    </Items>

                    <Items className={space.className}>
                        <CountUp
                            isCounting
                            end={65531}
                            duration={3}
                        />
                        <ItemWrapper>
                            <Item>Publisher</Item>
                        </ItemWrapper>
                    </Items>
                </Figures>
            </TextSection>

            {isLoading ? (
                <Skeleton
                    count={1}
                    height={500}
                    width={650}
                />
            ) : isError ? (
                <Error>{(error as Error).message}</Error>
            ) : (
                <HeroCard
                    key={id}
                    name={name}
                    image={background_image}
                    platforms={platforms?.map((platform: any) => platform.platform.name).join(", ")}
                />
            )}
        </Container>
    );
};

export default Hero;
