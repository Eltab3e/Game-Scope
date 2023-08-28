//required
import styled from "styled-components";
import Image from "next/image";
//essential
import { top } from "@/constants";
//components
import Button from "@/components/shared/Button";
import ArtistCard from "@/components/shared/Cards/ArtistCard";
import Heading from "@/components/shared/Heading";

const Container = styled.div`
    color: ${(props) => props.theme.colors.white};
    display: flex;
    flex-direction: column;
    gap: 6rem;
`;

const TextContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

// const HeadingWrapper = styled.div`
//     display: flex;
//     flex-direction: column;
//     gap: 1rem;
// `;

// const Title = styled.h3`
//     font-size: ${(props) => props.theme.fontSizes.h3};
//     font-weight: 600;
// `;

// const SubTitle = styled.p`
//     font-size: ${(props) => props.theme.fontSizes.h5};
//     font-weight: 400;
// `;

const ButtonContainer = styled.div`
    width: 24.7rem;
    display: flex;
    align-items: flex-end;
`;

const Gallery = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
`;

const Icon = () => (
    <Image
        src="/icons/RocketLaunch.svg"
        alt="user"
        width={20}
        height={20}
    />
);

const Top = () => {
    return (
        <Container>
            <TextContainer>
                <Heading
                    main="Top Creators"
                    sub="Checkout Top Rated Creators On NFT Marketplace."
                />

                <ButtonContainer>
                    <Button
                        fullwidth
                        variant="outline"
                        height="secondary"
                        preIcon={Icon}
                    >
                        View Rankings
                    </Button>
                </ButtonContainer>
            </TextContainer>

            <Gallery>
                {top.map((card) => (
                    <ArtistCard
                        key={card.id}
                        id={card.id}
                        title={card.title}
                        url={card.url}
                    />
                ))}
            </Gallery>
        </Container>
    );
};

export default Top;
