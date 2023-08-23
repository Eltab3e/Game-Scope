import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

import Button from "@/components/shared/Button";

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 15px 40px;
    background-color: ${(props) => props.theme.colors.backgroundPrimary};
    color: ${(props) => props.theme.colors.text};
    font-size: ${(props) => props.theme.fontSizes.large};
`;

const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`;

const Title = styled.h1`
    font-size: ${(props) => props.theme.fontSizes.extra};
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

const NavItem = styled(Link)``;

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
                <Title>GAME SCOPE</Title>
            </LogoWrapper>
            <NavWrapper>
                <NavList>
                    <NavItem href={"/"}>Marketplace</NavItem>
                    <NavItem href={"/"}>Rankings</NavItem>
                    <NavItem href={"/"}>About</NavItem>
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
