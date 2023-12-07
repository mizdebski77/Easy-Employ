import { styled } from "styled-components";

export const Wrapper = styled.section`
    padding: 20px;
    max-width: 1500px;
    margin: 0 auto;
`;

export const Title = styled.h1`
    text-align: center;
    font-size: 54px;
    color: ${({ theme }) => theme.color.fontMain};
    font-weight: normal;
`;