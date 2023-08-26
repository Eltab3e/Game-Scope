//required
import styled from "styled-components";

const Container = styled.div<any>`
    display: inline-block;
    position: relative;
    width: 1.5rem;
    height: 1.5rem;

    & div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 2rem;
        height: 2rem;
        margin: 0 auto;
        border: 2px solid ${(props) => props.color || "#fff"};
        border-radius: 50%;
        animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: ${(props) => props.color || "#fff"} transparent transparent transparent;
    }

    & div:nth-child(1) {
        animation-delay: -0.45s;
    }

    & div:nth-child(2) {
        animation-delay: -0.3s;
    }
    & div:nth-child(3) {
        animation-delay: -0.15s;
    }
    @keyframes lds-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;

const Spinner = ({ color }: { color?: string }) => {
    return (
        <Container color={color}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </Container>
    );
};

export default Spinner;
