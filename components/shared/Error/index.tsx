//required
import styled from "styled-components";

const Message = styled.p`
    color: ${(props) => props.theme.colors.red};
    font-size: ${(props) => props.theme.fontSizes.base};
    font-weight: 400;
`;

const Error = () => {
    return <Message>Oops, An Unkown Error Occurred!</Message>;
};

export default Error;
