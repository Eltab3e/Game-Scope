//required
import React from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { space } from "@/app/layout";

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

const Links = styled.p`
    font-size: ${(props) => props.theme.fontSizes.base};
    line-height: 160%;
    text-decoration: underline;
    cursor: pointer;
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

const Stores = ({ stores }: any) => {
    return (
        <Info>
            <Title className={space.className}>Available On:</Title>
            {stores.map((store: any) => (
                <More>
                    <Avatar>
                        <Image
                            src={"/icons/Hash.svg"}
                            alt="star"
                            fill
                        />
                    </Avatar>
                    <Links>
                        <Link
                            href={`https://${store.store.domain}`}
                            target="_blank"
                        >
                            {store.store.name}
                        </Link>
                    </Links>
                </More>
            ))}
        </Info>
    );
};

export default Stores;
