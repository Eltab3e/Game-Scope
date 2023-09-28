import { ReactNode } from "react";
import styled from "styled-components";

const Message = styled.p`
    color: #d62626;
    font-weight: 400;
    font-size: ${(props) => props.theme.fontSizes.base};
`;

const Error = ({ children }: { children: ReactNode }) => {
    return <Message>{children}</Message>;
};

export default Error;
