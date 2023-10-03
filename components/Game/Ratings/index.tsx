import { space } from "@/app/layout";
import Image from "next/image";
import React from "react";
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

const Avatar = styled.div`
    position: relative;
    width: 2.5rem;
    height: 2.5rem;
`;

const More = styled.div`
    display: flex;
    gap: 1rem;
`;

const Ratings = ({ ratings, rating }: any) => {
    return (
        <Info>
            <Title className={space.className}>Ratings: (Overall {rating}/5)</Title>
            {ratings.map((rating: any) => (
                <More>
                    <Avatar>
                        <Image
                            src={"/icons/People.svg"}
                            alt="star"
                            fill
                        />
                    </Avatar>
                    <Text>
                        {rating.count} voted {rating.title}.
                    </Text>
                </More>
            ))}
        </Info>
    );
};

export default Ratings;
