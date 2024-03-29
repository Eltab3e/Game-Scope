//required
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { space } from "@/app/layout";
import { navLinks } from "@/constants";
//components
import Button from "@/components/shared/Button";

const Container = styled.div`
    background-color: ${(props) => props.theme.colors.primaryBg};
    color: ${(props) => props.theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 5rem;
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

const Title = styled(Link)`
    font-size: ${(props) => props.theme.fontSizes.h4};
    font-weight: 400;

    &:hover {
        color: ${(props) => props.theme.colors.purple};
    }
`;

const NavWrapper = styled.div`
    display: flex;
    gap: 1.5rem;
`;

const NavList = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    gap: 1.5rem;
`;

const NavItem = styled.li`
    padding: 0 3rem;
`;

const Item = styled(Link)`
    font-size: ${(props) => props.theme.fontSizes.base};
    font-weight: 600;
    line-height: 140%;

    &:hover {
        color: ${(props) => props.theme.colors.purple};
    }
`;

const ButtonWrapper = styled.div`
    width: 15.2rem;
`;

const UserIcon = () => (
    <Image
        src="/icons/User.svg"
        alt="user"
        width={20}
        height={20}
    />
);

const Navbar = () => {
    return (
        <Container>
            <LogoWrapper>
                <Logo>
                    <Image
                        src={"/icons/Storefront.svg"}
                        alt="logo"
                        fill
                    />
                </Logo>

                <Title
                    className={space.className}
                    href={"/"}
                >
                    GAME-SCOPE
                </Title>
            </LogoWrapper>

            <NavWrapper>
                <NavList>
                    {navLinks.map((link) => (
                        <NavItem key={link.title}>
                            <Item href={link.url}>{link.title}</Item>
                        </NavItem>
                    ))}
                </NavList>

                <ButtonWrapper>
                    <Button
                        fullwidth
                        variant="primary"
                        height="secondary"
                        preIcon={UserIcon}
                    >
                        Sign Up
                    </Button>
                </ButtonWrapper>
            </NavWrapper>
        </Container>
    );
};

export default Navbar;
