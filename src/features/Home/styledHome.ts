import { styled } from "styled-components";

export const Wrapper = styled.section`
    max-width: 1500px;
    margin: 0 auto;
    padding: 20px;
`;

export const Title = styled.h1`
    font-size: 54px;
    font-weight: normal;
    text-align: center;
    color: ${({ theme }) => theme.color.fontMain};
`;