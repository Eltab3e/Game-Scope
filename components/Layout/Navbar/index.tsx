import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

import { space } from "@/app/layout";
import { navLinks } from "@/constants";
import Button from "@/components/shared/Button";

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 15px 40px;
    color: ${(props) => props.theme.colors.text};
    background-color: ${(props) => props.theme.colors.backgroundPrimary};
`;

const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const Title = styled.h1`
    font-size: ${(props) => props.theme.fontSizes.h4};
    font-weight: 400;
`;

const NavWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
`;

const NavList = styled.ul`
    display: flex;
    gap: 50px;
    list-style: none;
`;

const NavItem = styled(Link)`
    font-size: ${(props) => props.theme.fontSizes.h5};
    font-weight: 400;
`;

const UserIcon = () => (
    <Image
        src="/logos/User.svg"
        width={20}
        height={20}
        alt="user"
    />
);

const Navbar = () => {
    return (
        <Container>
            <LogoWrapper>
                <Image
                    src={"/logos/Storefront.svg"}
                    alt="logo"
                    width={"32"}
                    height={"32"}
                />
                <Title className={space.className}>GAME SCOPE</Title>
            </LogoWrapper>
            <NavWrapper>
                <NavList>
                    {navLinks.map((link) => (
                        <NavItem
                            href={link.url}
                            key={link.title}
                        >
                            {link.title}
                        </NavItem>
                    ))}
                </NavList>
                <Button
                    variant="primary"
                    preIcon={UserIcon}
                >
                    Sign Up
                </Button>
            </NavWrapper>
        </Container>
    );
};

export default Navbar;
