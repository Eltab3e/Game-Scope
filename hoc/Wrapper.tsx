//required
import styled from "styled-components";

const Wrapper = styled.div`
    background-color: ${(props) => props.theme.colors.primaryBg};
    color: ${(props) => props.theme.colors.white};
    display: flex;
    flex-direction: column;
    gap: 8rem;
    padding: 8rem 39rem;
`;

export default Wrapper;
