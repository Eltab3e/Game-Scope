// GameDescription.js
import { space } from "@/app/layout";
import { useState } from "react";
import styled from "styled-components";

const Info = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const Title = styled.h5`
    color: ${(props) => props.theme.colors.grey};
    font-size: ${(props) => props.theme.fontSizes.h5};
    font-weight: 600;
    line-height: 160%;
`;

const Text = styled.p`
    font-size: ${(props) => props.theme.fontSizes.base};
    line-height: 160%;
`;

const Show = styled.a`
    color: ${(props) => props.theme.colors.purple};
    margin-left: 5px;
    text-decoration: underline;
    cursor: pointer;
`;

const Description = ({ description }: any) => {
    const [showFullDescription, setShowFullDescription] = useState(false);

    const cleanDescription = description.replace(/<p>|<\/p>|<br\s*\/?>/g, "");

    const maxCharacters = 500;
    const shortDescription = cleanDescription.slice(0, maxCharacters);
    const fullDescription = cleanDescription;

    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    };

    return (
        <Info>
            <Title className={space.className}>Description:</Title>
            <Text>
                {showFullDescription ? (
                    <>
                        {fullDescription}.<Show onClick={toggleDescription}>Show Less</Show>
                    </>
                ) : (
                    <>
                        {shortDescription}
                        {cleanDescription.length > maxCharacters && (
                            <Show onClick={toggleDescription}>...Show More</Show>
                        )}
                    </>
                )}
            </Text>
        </Info>
    );
};

export default Description;
