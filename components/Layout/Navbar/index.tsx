import Image from "next/image";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    display: flex;
    padding: 10px 20px;
`;

const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`;

const Title = styled.h1`
    font-size: ${(props) => props.theme.fontSizes.extra};
`;

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
        </Container>
    );
};

export default Navbar;
