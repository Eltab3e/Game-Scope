//required
import { ReactNode } from "react";
import styled from "styled-components";

const Message = styled.p`
    color: ${(props) => props.theme.colors.red};
    font-size: ${(props) => props.theme.fontSizes.base};
    font-weight: 400;
`;

const Error = ({ children }: { children: ReactNode }) => {
    return <Message>{children}</Message>;
};

export default Error;
